import styled from 'styled-components/native';

export const StyledText = styled.Text`
	color: ${({ theme }) => theme.themeType.themeTextColor};
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
`;

export const RatingIcon = styled.Image`
	width: 13px;
	height: 13px;
`;
