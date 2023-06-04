import styled from 'styled-components/native';

import type { IButtonProps } from './interfaces';

export const StyledTouchableOpacity = styled.TouchableOpacity<
	Pick<IButtonProps, 'size'>
>`
	flex-direction: row;
	align-items: center;
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
