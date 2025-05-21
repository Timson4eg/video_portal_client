'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame } from 'lucide-react'

import { VideoItem } from '@/components/ui/viedo-item/VideoItem'

import { videoService } from '@/services/video.service'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<h2>Explore</h2>

			<div className='grid grid-cols-6 gap-6 '>
				{isLoading
					? 'isLoading...'
					: data?.data?.length &&
						data.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
			</div>
		</section>
	)
}
