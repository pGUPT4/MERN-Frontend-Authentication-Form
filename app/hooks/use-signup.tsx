import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {axiosInstance} from '../lib/axios'
import { ToastContainer, toast } from "react-toastify";


export default function useSignUp() {
	const router = useRouter();

	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
		re_password: '',
	});

	const { email, password, re_password } = inputValue;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setInputValue({ ...inputValue, [name]: value });
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
            const { data } = await axiosInstance.post(
                "auth/signup",
                {...inputValue,},
                { withCredentials: true }
            );

            const { success, message } = data;

            if (success) {
                toast.success(message, {
                    position: "bottom-right",
                });

                setTimeout(() => {router.push("/router/login");}, 1000);
            } else {
                toast.error(message, {
                    position: "bottom-left",
                });
            }
            } catch (error) {
                console.log(error);
            }
            setInputValue({
                ...inputValue,
                email: "",
                password: "",
                re_password: "",
            });
	};

	return {
		email,
		password,
		re_password,
		onChange,
		onSubmit,
	};
}