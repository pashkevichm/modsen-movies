import { darkTheme, lightTheme, theme } from '@app/theme/theme';

import { useColorScheme } from 'react-native';

export const useTheme = () => {
	const deviceTheme = useColorScheme();

	const themeType = deviceTheme === 'dark' ? darkTheme : lightTheme;

	const appTheme = { ...theme, themeType };

	return { appTheme };
};
