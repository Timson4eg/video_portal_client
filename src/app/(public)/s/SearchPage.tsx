'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame, Search } from 'lucide-react'
import type { Metadata } from 'next'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/components/ui/Heading'
import { SkeletonLoaader } from '@/components/ui/SkeletonLoaader'
import { VideoItem } from '@/components/ui/viedo-item/VideoItem'

import { NO_INDEX_PAGE } from '@/app/constants/seo.constants'
import { videoService } from '@/services/video.service'

export const metadata: Metadata = {
	title: 'Search',
	...NO_INDEX_PAGE
}

export default function SearchPage() {
	const searchParams = useSearchParams()

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('term')],
		queryFn: () => videoService.getAll(searchParams.get('term'))
	})
	console.log(data)

	return (
		<section>
			<Heading
				isH1
				Icon={Search}
			>
				Search&quot;{searchParams.get('term')}&quot;
			</Heading>

			<div className='grid grid-cols-6 gap-6 '>
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
					<p>Videos not found </p>
				)}
			</div>
		</section>
	)
}
