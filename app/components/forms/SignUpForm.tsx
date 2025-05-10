'use client';

// import { useSignUp } from '@/hooks';
// import { Form } from '@/components/forms';
import Form from './Form'
import { useState, ChangeEvent, FormEvent } from 'react';

export default function RegisterForm() {
	// const {
	// 	email,
	// 	password,
	// 	re_password,
	// 	onChange,
	// 	onSubmit,
	// } = useSignUp();

    // TODO: Temporarily added them, will remove once start using redux
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

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
		{
			labelText: 'Confirm password',
			labelId: 're_password',
			type: 'password',
			value: rePassword,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			formHeader='Register'
			btnText='Sign up'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}