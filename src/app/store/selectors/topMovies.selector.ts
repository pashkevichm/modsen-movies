import type { RootState } from '../store';

export const selectTopMovies = (state: RootState) => state.topMovies.topMovies;
export const selectTopMoviesLoadingStatus = (state: RootState) =>
	state.topMovies.topMoviesLoadingStatus;
