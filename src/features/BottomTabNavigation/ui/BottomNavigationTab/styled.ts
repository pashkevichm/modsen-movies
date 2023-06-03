import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity<{
	active?: boolean;
}>`
	flex: 1;
	justify-items: center;
	align-items: center;
	opacity: ${({ active }) => (active === true ? 1 : 0.3)};
	position: relative;
`;

export const TabDot = styled.View`
	width: 4px;
	height: 4px;
	background-color: ${({theme})=>theme.themeType.themeTextColor};
	position: absolute;
	border-radius: 50px;
	bottom: -10px;
`;
