'use client'

import { Controller } from 'react-hook-form'

import { Button } from '@/components/buttons/Button'
import { Field } from '@/components/field/Field'
import { TextAerea } from '@/components/field/Textarea'
import { UploadField } from '@/components/upload-field/uploadField'

import { useSettings } from './useSettings'

export function SettingsForm() {
	const {
		formObject: {
			handleSubmit,
			register,
			formState: { errors },
			control
		},
		isLoading,
		isProfileLoading,
		onSubmit
	} = useSettings()

	if (isProfileLoading) return <div> Loading...</div>

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
					<div>
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
							placeholder='Enter password'
							registration={register('password')}
							error={errors.password?.message}
						/>
						<Field
							label='Name'
							type='text'
							placeholder='Enter name'
							registration={register('name')}
							error={errors.password?.message}
						/>
						<Field
							label='Slug (alias)'
							type='text'
							placeholder='Enter slug'
							registration={register('channel.slug')}
							error={errors.channel?.slug?.message}
						/>
						<TextAerea
							label='Description'
							registration={register('channel.description')}
							error={errors.channel?.description?.message}
							placeholder='Enter description'
							rows={4}
						/>
					</div>
					<div>
						<Controller
							control={control}
							name='channel.avatarUrl'
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<UploadField
									label='Avatar:'
									onChange={onChange}
									value={value}
									error={error}
									folder='avatars'
									className='mb-5'
								/>
							)}
						/>

						<Controller
							control={control}
							name='channel.bannerUrl'
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<UploadField
									label='Channel Banner:'
									onChange={onChange}
									value={value}
									error={error}
									className='mb-5'
									folder='banners'
									aspectRation='16:9'
									overlay='/overlay.png'
								/>
							)}
						/>
					</div>
				</div>
				<div className='text-center mt-10'>
					<Button
						type='submit'
						isLoading={isLoading}
					>
						Update
					</Button>
				</div>
			</form>
		</div>
	)
}
