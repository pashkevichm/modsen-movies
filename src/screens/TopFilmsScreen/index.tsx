import { TopMoviesList } from '@entities/Movie/ui/TopMoviesList';

import { TopFilmsScreenWrapper } from './styled';

export const TopFilmsScreen = () => {
	return (
		<TopFilmsScreenWrapper>
			<TopMoviesList />
		</TopFilmsScreenWrapper>
	);
};
