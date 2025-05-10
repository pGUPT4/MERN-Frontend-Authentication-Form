'use client';

import { FormEvent, ChangeEvent, useState } from 'react';
// import { useLogin } from '@/hooks';
import Form from './Form';


export default function LoginForm() {
	// const { email, password, isLoading, onChange, onSubmit } = useLogin();

    // TODO: Temporarily added them, will remove once start using redux
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {}

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {}

	const config = [
		{
			labelText: 'Email',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			btnText='Login'
			formHeader='Login'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}