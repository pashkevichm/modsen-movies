import { topMoviesMock } from '@entities/TopMovie/lib/mock/topMovies';

import { REACT_APP_IMDB_API_KEY } from '@env';

import axios from 'axios';
import type { AxiosInstance } from 'axios';

import type { TopMovie } from '@entities/TopMovie/interfaces';

const apiHost = 'imdb-top-100-movies.p.rapidapi.com';
const apiKey = REACT_APP_IMDB_API_KEY;
const imdbApiInstance: AxiosInstance = axios.create({
	baseURL: `https://${apiHost}`,
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': apiHost,
	},
});

export const imdbApi = {
	async getTopMovies() {
		// const { data } = await imdbApiInstance.get<TopMovie[]>('');

		return topMoviesMock;
	},
};
