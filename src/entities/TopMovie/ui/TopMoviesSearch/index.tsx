import { useEffect, useState } from 'react';

import { colors } from '@app/theme/theme';
import { setTopMoviesSearchValue } from '@app/store/slices/topMovies.slice';

import { useDispatch } from 'react-redux';

import {
	TopMoviesSearchWrapper,
	TopMoviesIconImage,
	TopMoviesSearchInput,
} from './styled';

export const TopMoviesSearch = () => {
	const [searchValue, setSearchValue] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTopMoviesSearchValue(searchValue));
	}, [searchValue]);

	const handleChangeInput = (text: string) => {
		setSearchValue(text);
	};

	return (
		<TopMoviesSearchWrapper>
			<TopMoviesIconImage
				style={{ tintColor: colors.darkGray }}
				resizeMode='contain'
				source={require('@app/assets/icons/search.png')}
			/>
			<TopMoviesSearchInput
				value={searchValue}
				onChangeText={handleChangeInput}
				placeholder='Search movie in the top'
				placeholderTextColor={colors.darkGray}
			/>
			<TopMoviesIconImage
				style={{ tintColor: colors.darkGray }}
				resizeMode='contain'
				source={require('@app/assets/icons/filter.png')}
			/>
		</TopMoviesSearchWrapper>
	);
};
