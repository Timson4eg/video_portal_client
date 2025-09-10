import * as m from 'framer-motion/m'
import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/page.config'

import { transformDate } from '@/utils/transform-data'
import { transformViews } from '@/utils/transform-views'

import type { IVideo } from '@/types/video.types'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<m.div
			whileHover={{
				scale: 1.03,
				y: -5
			}}
			transition={{
				type: 'spring',
				stiffness: 500,
				damping: 30
			}}
		>
			<div className='relative mb-1.5'>
				<div className='relative aspect-[16/9] w-full max-w-[360px]'>
					<Link href={PAGE.VIDEO(video.slug)}>
						<Image
							src={video.thumbnailUrl}
							fill
							// width={250}
							// height={140}
							alt={video.title}
							className='rounded-md object-cover'
						></Image>
					</Link>
				</div>

				<Link
					href={PAGE.CHANEL(video.channel.slug)}
					className='absolute left-1.5 bottom-1.5'
				>
					<Image
						src={video.channel.avatarUrl}
						width={35}
						height={35}
						alt={video.channel.description}
						className=' rounded-full shadow'
					></Image>
				</Link>
			</div>
			<div className='mb-1.5 flex items-center justify-between'>
				<div className='flex items-center gap-0.5'>
					{Icon && (
						<Icon
							className='text-red-600'
							size={24}
						/>
					)}
					<span className='text-gray-400 text-sm'>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-gray-400 text-sm'>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<Link
				href={PAGE.VIDEO(video.slug)}
				className='line-clamp-2 leading-[1.3]'
			>
				<div>{video.title}</div>
			</Link>

			<div className='mb-1'>
				<Link
					className='flex items-center gap-1'
					href={PAGE.CHANEL(video.channel.slug)}
				>
					<span className='text-gray-400 text-sm'>{video.channel.slug}</span>
					{video.channel.isVerified && (
						<span>
							<BadgeCheck
								className='text-green-500'
								size={15}
							/>
						</span>
					)}
				</Link>
			</div>
		</m.div>
	)
}
