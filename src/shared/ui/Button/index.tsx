import { StyledTouchableOpacity } from './styled';

import type { IButtonProps } from './interfaces';

export const Button = ({
	children,
	size = 'medium',

	onPress,
}: IButtonProps) => {
	return (
		<StyledTouchableOpacity
			onPress={onPress}
			size={size}
			activeOpacity={0.7}
		>
			{children}
		</StyledTouchableOpacity>
	);
};
