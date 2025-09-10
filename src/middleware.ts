import type { NextRequest, NextResponse } from 'next/server'

import { PAGE } from './config/page.config'
import { STUDIO_PAGE } from './config/studio-page'
import { protectLoginPages } from './server-actions/middlewares/protect-login.middlware'
import { protectStudio } from './server-actions/middlewares/protect-studio.middlware'

export async function middleware(request: NextRequest, response: NextResponse) {
	const url = new URL(request.url)
	const pathName = url.pathname

	//Home
	if (pathName.includes(STUDIO_PAGE.HOME)) {
		return protectStudio(request)
	}
	if (pathName.includes(PAGE.AUTH)) {
		return protectLoginPages(request)
	}

	//Auth
}

export const config = {
	mather: ['/studio/:path*', '/auth/:path']
}
