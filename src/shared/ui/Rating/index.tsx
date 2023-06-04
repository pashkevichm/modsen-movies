import { RatingIcon, StyledText } from './styled';

import type { RatingProps } from './interfaces';

export const Rating = ({ rating }: RatingProps) => {
	return (
		<StyledText>
			{rating}{' '}
			<RatingIcon source={require('@app/assets/icons/star.png')} />
		</StyledText>
	);
};
