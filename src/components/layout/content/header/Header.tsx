import dynamic from 'next/dynamic'

import { SkeletonLoaader } from '@/components/ui/SkeletonLoaader'

import { HeaderLinks } from './HeaderLinks'
import { SearchField } from './SearchField'

const DynamicHeaderProfile = dynamic(
	() => import('./profile/HeaderProfile').then(mod => mod.HeaderProfile),
	{ ssr: false, loading: () => <SkeletonLoaader className='w-10 mb-0 rounded-md' /> }
)

export function Header() {
	return (
		<header className='p-layout border-b border-border flex items-center justify-between'>
			<SearchField />
			<div className='flex items-center gap-6'>
				<HeaderLinks />

				<DynamicHeaderProfile />
				{/* <HeaderLinks/> */}
			</div>
		</header>
	)
}
