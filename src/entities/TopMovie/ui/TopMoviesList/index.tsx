import { useEffect } from 'react';

import {
	selectTopMoviesBySearchValue,
	selectTopMoviesLoadingStatus,
} from '@app/store/selectors/topMovies.selector';
import { fetchTopMovies } from '@app/store/slices/topMovies.slice';
import { LOADING_STATUS } from '@shared/lib/constants/loadingStatus';
import { Spinner } from '@shared/ui/Spinner';

import { FlatList, Text } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TopMovieCard } from '../TopMovieCard';

import type { TopMovie } from '@entities/TopMovie/interfaces';

export const TopMoviesList = () => {
	const dispatch = useDispatch();

	const topMovies = useSelector(selectTopMoviesBySearchValue);
	const topMoviesLoadingStatus = useSelector(selectTopMoviesLoadingStatus);

	useEffect(() => {
		dispatch(fetchTopMovies());
	}, []);

	if (topMoviesLoadingStatus === LOADING_STATUS.LOADING) {
		return <Spinner />;
	}

	if (topMoviesLoadingStatus === LOADING_STATUS.ERROR) {
		return <Text>Error</Text>;
	}

	const renderItem: ListRenderItem<TopMovie> = ({ item, index }) => (
		<TopMovieCard key={item.id} topMovie={item} position={index + 1} />
	);

	const keyExtractor = (item: TopMovie) => item.imdbid;

	const getItemLayout = (
		data: TopMovie[] | null | undefined,
		index: number
	) => ({
		length: 150,
		offset: 150 * index,
		index,
	});

	return (
		<FlatList<TopMovie>
			data={topMovies}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			getItemLayout={getItemLayout}
			windowSize={6}
		/>
	);
};
