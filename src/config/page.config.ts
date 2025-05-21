class PublicPage {
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAMES = '/video-games'

	SEARCH = '/search'

	MY_CHANEL = '/my-chanel'
	SUBSCRIPTION = '/subscription'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-videos'

	SETTINGS = '/settings'
	FEEDBACK = '/feedback'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	CHANEL(path: string) {
		return `/c/${path}`
	}
}

export const PAGE = new PublicPage()
