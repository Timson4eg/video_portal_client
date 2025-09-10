import { SettingsIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { SettingsForm } from './SettingsForm'
import { NO_INDEX_PAGE } from '@/app/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<div>
			<Heading
				Icon={SettingsIcon}
				isPageHeading
			>
				Settings
			</Heading>

			<SettingsForm />
		</div>
	)
}
