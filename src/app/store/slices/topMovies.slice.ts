import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '@shared/lib/constants/loadingStatus';

import type { TopMovie } from '@entities/TopMovie/interfaces';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TopMoviesState {
	topMovies: TopMovie[];
	topMoviesLoadingStatus: LOADING_STATUS;
	topMovieSearchValue: string;
}

const initialState: TopMoviesState = {
	topMovies: [],
	topMoviesLoadingStatus: LOADING_STATUS.IDLE,
	topMovieSearchValue: '',
};

export const topMoviesSlice = createSlice({
	name: 'topMovies',
	initialState,
	reducers: {
		fetchTopMovies: () => {},
		setTopMovies: (state, action: PayloadAction<TopMovie[]>) => {
			state.topMovies = action.payload;
		},
		setTopMoviesLoadingStatus: (
			state,
			action: PayloadAction<LOADING_STATUS>
		) => {
			state.topMoviesLoadingStatus = action.payload;
		},
		setTopMoviesSearchValue: (state, action: PayloadAction<string>) => {
			state.topMovieSearchValue = action.payload;
		},
	},
});

export const {
	setTopMovies,
	setTopMoviesLoadingStatus,
	fetchTopMovies,
	setTopMoviesSearchValue,
} = topMoviesSlice.actions;
export const topMoviesReducer = topMoviesSlice.reducer;
