import styled from 'styled-components/native';

import type { TopMovie } from '@entities/Movie/interfaces';

export const TopMoviesFlatList = styled.FlatList<TopMovie>`
	gap: 30px;
`;
