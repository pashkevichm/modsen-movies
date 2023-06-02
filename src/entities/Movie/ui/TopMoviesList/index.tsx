import { useEffect } from 'react';

import {
	selectTopMovies,
	selectTopMoviesLoadingStatus,
} from '@app/store/selectors/topMovies.selector';
import { fetchTopMovies } from '@app/store/slices/topMovies.slice';
import { LOADING_STATUS } from '@shared/lib/constants/loadingStatus';
import { Spinner } from '@shared/ui/Spinner';

import { FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import type { TopMovie } from '@entities/Movie/interfaces';

export const TopMoviesList = () => {
	const dispatch = useDispatch();

	const topMovies = useSelector(selectTopMovies);
	const topMoviesLoadingStatus = useSelector(selectTopMoviesLoadingStatus);

	console.log(topMovies);
	console.log(topMoviesLoadingStatus);

	useEffect(() => {
		dispatch(fetchTopMovies());
	}, []);

	if (topMoviesLoadingStatus === LOADING_STATUS.LOADING) {
		return <Spinner />;
	}

	if (topMoviesLoadingStatus === LOADING_STATUS.ERROR) {
		return <Text>Error</Text>;
	}

	return (
		<FlatList<TopMovie>
			data={topMovies}
			renderItem={({ item }) => <Text>{item.description}</Text>}
			keyExtractor={(item) => item.id}
		/>
	);
};
