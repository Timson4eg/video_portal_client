'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass, Flame } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { SkeletonLoaader } from '@/components/ui/SkeletonLoaader'
import { VideoItem } from '@/components/ui/viedo-item/VideoItem'

import { videoService } from '@/services/video.service'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>

			<div className='grid-6-cols'>
				{isLoading ? (
					<SkeletonLoaader
						count={6}
						className='h-36 rounded-md'
					/>
				) : data?.data?.length ? (
					data.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<p>Video not found </p>
				)}
			</div>
		</section>
	)
}
