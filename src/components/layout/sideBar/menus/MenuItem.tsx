import type { ISidebarItem } from '../sidebar.types'
import cn from 'clsx'
import Link from 'next/link'

interface Props {
	item: ISidebarItem
	isActive: boolean
	isShowedSidebar: boolean
}

export function MenuItem({ item, isActive, isShowedSidebar }: Props) {
	// console.log(isShowedSidebar)
	return (
		<li className=''>
			<Link
				href={item.link}
				className={cn('group flex items-center gap-5 py-2')}
			>
				<item.icon
					className={cn('min-w-6', {
						'group-hover:text-primary transition group-hover:-rotate-6': !isActive,
						'text-red-400': isActive && !isShowedSidebar
					})}
				/>
				<span
					className={cn('border-b', {
						'border-d-white': isActive,
						'border-transparent': !isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-0.5 bg-border my-5 w-full block'></span>}
		</li>
	)
}
