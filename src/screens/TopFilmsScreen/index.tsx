import { TopMoviesList } from '@entities/TopMovie/ui/TopMoviesList';
import { Layout } from '@app/wrappers/Layout';
import { TopMoviesSearch } from '@entities/TopMovie/ui/TopMoviesSearch';

import { TopFilmsScreenWrapper } from './styled';

export const TopFilmsScreen = () => {
	return (
		<Layout>
			<TopFilmsScreenWrapper>
				<TopMoviesSearch />
				<TopMoviesList />
			</TopFilmsScreenWrapper>
		</Layout>
	);
};
