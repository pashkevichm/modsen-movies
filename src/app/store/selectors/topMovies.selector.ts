import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export const selectTopMovies = (state: RootState) => state.topMovies.topMovies;
export const selectTopMoviesLoadingStatus = (state: RootState) =>
	state.topMovies.topMoviesLoadingStatus;
export const selectTopMoviesSearchValue = (state: RootState) =>
	state.topMovies.topMovieSearchValue;
export const selectTopMoviesBySearchValue = createSelector(
	selectTopMovies,
	selectTopMoviesSearchValue,
	(topMovies, searchValue) => {
		return searchValue === ''
			? topMovies
			: topMovies.filter((topMovie) =>
					topMovie.title
						.toLowerCase()
						.includes(searchValue.toLowerCase())
			  );
	}
);
