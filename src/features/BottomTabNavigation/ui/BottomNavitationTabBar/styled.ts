import styled from 'styled-components/native';

export const BottomNavitationTabBarWrapper = styled.View`
	min-height: 71px;
	background-color: ${({ theme }) =>
		theme.themeType.themeBottomTabBarNavigationBackgroundColor};
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
