import { useTheme } from '@shared/lib/hooks/useTheme';

import { StyledImage } from './styled';

import type { BottonNavigationTabIconProps } from './interfaces';

export const BottonNavigationTabIcon = ({
	imageSource,
}: BottonNavigationTabIconProps) => {
	const { appTheme } = useTheme();

	const tintColor = appTheme.themeType.themeTextColor;

	return (
		<StyledImage
			style={{ tintColor }}
			source={imageSource}
			resizeMode='contain'
		/>
	);
};
