import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/viedo-item/VideoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'VideoPortal',
	description: 'best video platform',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Video Portal'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	return (
		<section>
			{!!trendingVideos.length && (
				<section className='mb-10'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid-6-cols'>
						{trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}

			{/*  */}
			<Explore />
		</section>
	)
}
