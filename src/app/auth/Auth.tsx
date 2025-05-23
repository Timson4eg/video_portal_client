'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/button/Button'
import { Field } from '@/components/field/Field'
import { Logo } from '@/components/layout/sideBar/header/Logo'

interface IAuthForm {
	email: string
	password: string
	confirmPassword?: string
}

export function Auth({}: IAuthForm) {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<IAuthForm>({ mode: 'onChange' })

	const onSubmit: Submit<IAuthForm> = data => {
		if (isLogin) {
		} else {
		}
	}

	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='w-1/6 p-layout border-border border rounded'>
				<div className='text-center mb-2'>
					<Logo />
				</div>
				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${
							isLogin ? 'text-primary border-b-2 text-primary' : 'text-gray-600'
						}`}
						onClick={() => setIsLogin(true)}
					>
						Enter
					</button>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${
							!isLogin ? 'text-primary border-b-2 text-primary' : 'text-gray-600'
						}`}
						onClick={() => setIsLogin(false)}
					>
						Registration
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						label='Email'
						type='email'
						placeholder='Email'
						registration={register('email', { required: 'Email is required' })}
						error={errors.email?.message}
					/>

					<Field
						label='Password'
						type='password'
						placeholder='Password'
						registration={register('password', { required: 'Password is required' })}
						error={errors.password?.message}
					/>
					{!isLogin && (
						<Field
							label='Password confitmation'
							type='password'
							placeholder='Confirm Password'
							registration={register('confirmPassword', {
								required: 'Password confirmation is required',
								validate: value => value === watch('password') || `Passwords don't mutch`
							})}
							error={errors.confirmPassword?.message}
						/>
					)}
					<div className='text-center mt-6'>
						<Button type='submit'>{isLogin ? 'Enter' : 'Registration'}</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
