import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Layout } from '@/components/layout/Layout'

import { Providers } from '@/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'Video Portal',
		template: '%s | Video Portal'
	},
	description: 'Best app for video watching'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.variable}`}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
