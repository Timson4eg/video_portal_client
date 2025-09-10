import Image from 'next/image'
import Link from 'next/link'

import { SkeletonLoaader } from '@/components/ui/SkeletonLoaader'

import { STUDIO_PAGE } from '@/config/studio-page'

import { useProfile } from '@/hooks/useProfile'

export function HeaderAvatar() {
	const { profile, isLoading } = useProfile()

	if (isLoading) return <SkeletonLoaader className='w-10 mb-0 rounded-md' />

	return (
		<div className='relative'>
			<Link
				href={STUDIO_PAGE.SETTINGS}
				className='shrink-0'
			>
				<Image
					src={profile?.channel?.avatarUrl || '/avatar.jpg'}
					alt=''
					width={40}
					height={40}
					className=' rounded-lg'
				></Image>
			</Link>
			{!profile?.verificationToken && (
				<div className='absolute -left-4 -bottom-3.5 bg-primary p-0.5 rounded text-xs w-max'>
					not verified
				</div>
			)}
		</div>
	)
}
