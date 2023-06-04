import styled from 'styled-components/native';

export const TopMoviesSearchWrapper = styled.View`
	max-height: 50px;
	height: 50px;
	flex-direction: row;
	gap: 9px;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.gray};
	align-items: center;
	justify-content: center;
	border-radius: 25px;
`;

export const TopMoviesSearchInput = styled.TextInput`
	flex: 1;
	flex-direction: row;
	height: 14px;
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 14px;
	color: ${({ theme }) => theme.colors.darkGray};
`;

export const TopMoviesIconImage = styled.Image`
	width: 15px;
	height: 15px;
`;
