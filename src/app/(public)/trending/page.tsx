import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/viedo-item/VideoItem'

import { PAGE } from '@/config/page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'best videos in trends',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos()

	return (
		<section>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='grid-6-cols'>
				{videos.data.length ? (
					videos.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>Trends Videos are temporary unavailable</div>
				)}
			</div>
		</section>
	)
}
