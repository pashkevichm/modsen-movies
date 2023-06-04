import styled from 'styled-components/native';

import type { IButtonProps } from './interfaces';

export const ButtonWrapper = styled.View`
	flex-wrap: wrap;
	align-items: flex-start;
	flex-direction: row;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity<
	Pick<IButtonProps, 'size'>
>`
	background-color: ${({ theme }) => theme.colors.orange};
	border-radius: 10px;
	padding: ${({ size }) => {
		switch (size) {
			case 'large':
				return '17px 29px';
			case 'small':
				return '5px 7px';
			case 'medium':
				return '7px 24px';
		}
	}};
`;

export const StyledText = styled.Text<Exclude<IButtonProps, 'children'>>`
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => fontSize}px;
	color: ${({ textColor }) => textColor};
`;
