import { memo } from 'react';

import { Button } from '@shared/ui/Button';
import { Rating } from '@shared/ui/Rating';

import {
	MoreButtonArrowImage,
	MoreButtonText,
	MoreButtonWrapper,
	TopMovieContent,
	TopMovieDescriptionText,
	TopMovieImage,
	TopMovieImageWrapper,
	TopMovieItemWrapper,
	TopMovieTitle,
} from './styled';

import type { TopMovieItemProps } from './intefaces';

export const TopMovieItem = memo(function item({
	topMovie,
	position,
}: TopMovieItemProps) {
	const { title, genre, director, rating, image, id } = topMovie;

	const genres = genre.join(' ');
	const authors = director.join(' ');

	return (
		<TopMovieItemWrapper key={id}>
			<TopMovieImageWrapper>
				<TopMovieImage source={{ uri: image }} />
			</TopMovieImageWrapper>
			<TopMovieContent>
				<TopMovieTitle numberOfLines={2}>
					{position}. {title}
				</TopMovieTitle>
				<TopMovieDescriptionText>
					Genre: {genres}
				</TopMovieDescriptionText>
				<TopMovieDescriptionText>
					Authors: {authors}
				</TopMovieDescriptionText>
				<Rating rating={+rating} />
				<MoreButtonWrapper>
					<Button size='small'>
						<MoreButtonText>More</MoreButtonText>
						<MoreButtonArrowImage
							source={require('@app/assets/icons/arrow-left.png')}
							resizeMode='contain'
						/>
					</Button>
				</MoreButtonWrapper>
			</TopMovieContent>
		</TopMovieItemWrapper>
	);
});
