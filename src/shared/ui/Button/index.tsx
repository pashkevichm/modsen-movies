import { ButtonWrapper, StyledText, StyledTouchableOpacity } from './styled';

import type { IButtonProps } from './interfaces';

export const Button = ({
	children,
	size = 'medium',
	fontWeight = 'normal',
	textColor = 'white',
	fontSize = 11,
	onPress,
}: IButtonProps) => {
	return (
		<ButtonWrapper>
			<StyledTouchableOpacity
				onPress={onPress}
				size={size}
				activeOpacity={0.7}
			>
				<StyledText
					size={size}
					fontSize={fontSize}
					fontWeight={fontWeight}
					textColor={textColor}
				>
					{children}
				</StyledText>
			</StyledTouchableOpacity>
		</ButtonWrapper>
	);
};
