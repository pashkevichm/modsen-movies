import { configureStore, combineReducers } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sagas/root.saga';
import { topMoviesReducer } from './slices/topMovies.slice';

import type { ThunkAction, Action } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	topMovies: topMoviesReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
