import axios from 'axios'

import { axiosClassic } from '@/api/axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	getAll(searchTerm?: string | null) {
		return axiosClassic
			.get<IVideo[]>(
				this._VIDEOS,
				searchTerm
					? {
							params: {
								searchTerm
							}
						}
					: {}
			)
			.then(res => ({ data: res.data.videos }))
	}

	getVideoGames() {
		return axiosClassic
			.get<IVideo[]>(`${this._VIDEOS}/games`)
			.then(res => ({ data: res.data.videos }))
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}

	getExploreVideos() {
		return axiosClassic
			.get<{ videos: IVideo[] }>(`${this._VIDEOS}/explore`)
			.then(res => ({ data: res.data.videos }))
	}
}

export const videoService = new VideoService()
