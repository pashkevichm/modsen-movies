import axios from 'axios';
import type { AxiosInstance } from 'axios';

import type { TopMovie } from '@interfaces/movie';

const apiHost = 'imdb-top-100-movies.p.rapidapi.com';
const apiKey = process.env.IMDB_API_KEY ?? '';

const imdbApiInstance: AxiosInstance = axios.create({
	baseURL: `https://${apiHost}`,
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': apiHost,
	},
});

export const imdbApi = {
	async getTopMovies() {
		const { data } = await imdbApiInstance.get<TopMovie[]>('');

		return data;
	},
};
