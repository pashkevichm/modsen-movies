import { memo } from 'react';

import {
	RatingIcon,
	TopMovieContent,
	TopMovieDescriptionText,
	TopMovieImage,
	TopMovieImageWrapper,
	TopMovieItemWrapper,
	TopMovieRating,
	TopMovieTitle,
} from './styled';

import type { TopMovieItemProps } from './intefaces';

export const TopMovieItem = memo(function item({
	topMovie,
	position,
}: TopMovieItemProps) {
	const { title, genre, director, rating, description, image } = topMovie;

	const genres = genre.join(' ');
	const authors = director.join(' ');

	return (
		<TopMovieItemWrapper>
			<TopMovieImageWrapper>
				<TopMovieImage source={{ uri: image }} />
			</TopMovieImageWrapper>
			<TopMovieContent>
				<TopMovieTitle>
					{position}. {title}
				</TopMovieTitle>
				<TopMovieDescriptionText>
					Genre: {genres}
				</TopMovieDescriptionText>
				<TopMovieDescriptionText>
					Authors: {authors}
				</TopMovieDescriptionText>
				<TopMovieRating>
					{rating}{' '}
					<RatingIcon
						source={require('@app/assets/icons/star.png')}
					/>
				</TopMovieRating>
				<TopMovieDescriptionText numberOfLines={4} ellipsizeMode='tail'>
					{description}
				</TopMovieDescriptionText>
			</TopMovieContent>
		</TopMovieItemWrapper>
	);
});
