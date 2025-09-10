import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PAGE } from '@/config/page.config'

import { COLORS } from '@/app/constants/color.constants'

export function Logo() {
	return (
		<Link
			href={PAGE.HOME}
			className='inline-flex items-center gap-5'
		>
			<SquarePlay
				color={COLORS.primary}
				size={30}
			/>
			<span className='font-medium text-xl'>RED Video</span>
		</Link>
	)
}
