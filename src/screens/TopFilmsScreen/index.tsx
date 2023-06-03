import { TopMoviesList } from '@entities/Movie/ui/TopMoviesList';
import { Layout } from '@app/wrappers/Layout';

import { TopFilmsScreenWrapper } from './styled';

export const TopFilmsScreen = () => {
	return (
		<Layout>
			<TopFilmsScreenWrapper>
				<TopMoviesList />
			</TopFilmsScreenWrapper>
		</Layout>
	);
};
