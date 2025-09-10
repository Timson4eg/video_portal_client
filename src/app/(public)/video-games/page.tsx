import { Flame, Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'
import { VideoItem } from '@/components/ui/viedo-item/VideoItem'

import { PAGE } from '@/config/page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Games',
	description: 'Top Gaming Videos',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Games'
	}
}

export default async function TrendingPage() {
	const videos = await videoService.getVideoGames()
	console.log(videos.data.videos)

	return (
		<section>
			<Heading Icon={Gamepad2}>Video Games</Heading>
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
					<div>Game videos are temporarily unavailable </div>
				)}
			</div>
		</section>
	)
}
