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
            if (success) {
                toast.success('Success!', {
                    position: "top-right",
                });

                setTimeout(() => {
                    router.push("/");
                }, 1000);
            } else {
                toast.error(message, {
                    position: "top-right",
                  });
            }
            } catch (error) {
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