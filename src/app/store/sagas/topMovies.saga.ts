import { call, put, takeLeading } from 'redux-saga/effects';
import { LOADING_STATUS } from '@shared/lib/constants/loadingStatus';
import { imdbApi } from '@shared/lib/api/imbd.api';

import {
	fetchTopMovies,
	setTopMovies,
	setTopMoviesLoadingStatus,
} from '../slices/topMovies.slice';

import type { TopMovie } from '@entities/TopMovie/interfaces';

export function* fetchTopMoviesWorker() {
	yield put(setTopMoviesLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: TopMovie[] = yield call(imdbApi.getTopMovies);
		yield put(setTopMovies(data));
		yield put(setTopMoviesLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		yield put(setTopMoviesLoadingStatus(LOADING_STATUS.ERROR));
	}
}

export function* TopMoviesSaga() {
	yield takeLeading(fetchTopMovies.type, fetchTopMoviesWorker);
}
