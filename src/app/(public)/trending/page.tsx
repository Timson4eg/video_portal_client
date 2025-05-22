import type { Metadata } from 'next'

import { PAGE } from '@/config/page.config'

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

export default function TrendingPage() {
	return <div>Trending</div>
}
