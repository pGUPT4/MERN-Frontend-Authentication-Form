import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { axiosInstance } from '../lib/axios';

export default function useLogin() {
	const router = useRouter();

	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});

	const { email, password } = inputValue;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setInputValue({ ...inputValue, [name]: value });
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
            const { data } = await axiosInstance.post(
                "auth/login",
                {...inputValue,},
                { withCredentials: true }
            );

            console.log('data ', data);
            const { success, message } = data;
            if (data) {
                toast.success('Logged in', {
                    position: "top-right",
                });

                setTimeout(() => {
                    router.push("/");
                }, 1000);
            }
            } catch (error) {
                toast.error('There was an error logging in. Please try again', {
                    position: "top-right",
                });
                console.log(error);
            }
            setInputValue({
                ...inputValue,
                email: '',
                password: '',
            });
	};

	return {
		email,
		password,
		onChange,
		onSubmit,
	};
}