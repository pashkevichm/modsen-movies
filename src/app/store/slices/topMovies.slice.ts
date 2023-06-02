import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '@shared/lib/constants/loadingStatus';

import type { TopMovie } from '@entities/Movie/interfaces';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TopMoviesState {
	topMovies: TopMovie[];
	topMoviesLoadingStatus: LOADING_STATUS;
}

const initialState: TopMoviesState = {
	topMovies: [],
	topMoviesLoadingStatus: LOADING_STATUS.IDLE,
};

export const topMoviesSlice = createSlice({
	name: 'topMovies',
	initialState,
	reducers: {
		fetchTopMovies: () => {},
		setTopMovies: (state, action: PayloadAction<TopMovie[]>) => {
			state.topMovies = action.payload;
		},
		settopMoviesLoadingStatus: (
			state,
			action: PayloadAction<LOADING_STATUS>
		) => {
			state.topMoviesLoadingStatus = action.payload;
		},
	},
});

export const { setTopMovies, settopMoviesLoadingStatus, fetchTopMovies } =
	topMoviesSlice.actions;
export const topMoviesReducer = topMoviesSlice.reducer;
