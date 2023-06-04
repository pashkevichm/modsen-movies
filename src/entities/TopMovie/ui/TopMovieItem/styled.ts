import styled from 'styled-components/native';

export const TopMovieItemWrapper = styled.View`
	flex: 1;
	flex-direction: row;
	gap: 20px;
	height: 130px;
	margin-bottom: 20px;
`;

export const TopMovieImageWrapper = styled.View`
	width: 90px;
	height: 130px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 10px;
`;

export const TopMovieImage = styled.Image`
	width: 90px;
	height: 130px;
	border-radius: 10px;
`;

export const TopMovieContent = styled.View`
	flex: 1;
	align-items: flex-start;
`;

export const TopMovieTitle = styled.Text`
	color: ${({ theme }) => theme.themeType.themeTextColor};
	font-weight: 700;
	font-size: 15px;
	line-height: 22px;
	text-transform: uppercase;
`;

export const TopMovieDescriptionText = styled.Text`
	color: ${({ theme }) => theme.themeType.themeTextColor};
	font-weight: 300;
	font-size: 12px;
	line-height: 18px;
`;

export const MoreButtonWrapper = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: flex-end;
`;

export const MoreButtonArrowImage = styled.Image`
	width: 8px;
	height: 8px;
	margin-left: 3px;
`;

export const MoreButtonText = styled.Text`
	font-weight: 400;
	font-size: 11px;
	line-height: 16px;
	color: ${({ theme }) => theme.colors.white};
`;
