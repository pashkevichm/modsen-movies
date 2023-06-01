import { all } from 'redux-saga/effects';

import { TopMoviesSaga } from './topMovies.saga';

export function* rootSaga() {
	yield all([TopMoviesSaga()]);
}
