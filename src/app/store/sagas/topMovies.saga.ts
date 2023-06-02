import { call, put, takeLeading } from 'redux-saga/effects';
import { LOADING_STATUS } from '@shared/lib/constants/loadingStatus';
import { imdbApi } from '@shared/lib/api/imbd.api';

import { AxiosError } from 'axios';

import {
	fetchTopMovies,
	setTopMovies,
	settopMoviesLoadingStatus,
} from '../slices/topMovies.slice';

import type { TopMovie } from '@entities/Movie/interfaces';

export function* fetchTopMoviesWorker() {
	yield put(settopMoviesLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: TopMovie[] = yield call(imdbApi.getTopMovies);
		console.log('dataa:', data);
		yield put(setTopMovies(data));
		yield put(settopMoviesLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.message);
			console.log(error.code);
			console.log(error.cause);
			console.log(error.response?.data);
		}
		yield put(settopMoviesLoadingStatus(LOADING_STATUS.ERROR));
	}
}

export function* TopMoviesSaga() {
	yield takeLeading(fetchTopMovies.type, fetchTopMoviesWorker);
}
