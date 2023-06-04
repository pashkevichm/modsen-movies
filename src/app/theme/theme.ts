import type { ThemeType, Theme } from '@shared/lib/interfaces/theme';

export const colors = {
	darkBlack: '#16171F',
	black: '#1E1F27',
	white: '#ffffff',
	gray: '#D9D9D9',
	darkGray: '#696969',
	orange: '#D98639',
} as const;

const { white, black, darkBlack } = colors;
const fontFamily = 'Poppins';

export const lightTheme: ThemeType = {
	themeName: 'light',
	themeBackgroundColor: white,
	themeTextColor: black,
	themeBottomTabBarNavigationBackgroundColor: white,
};

export const darkTheme: ThemeType = {
	themeName: 'dark',
	themeBackgroundColor: black,
	themeTextColor: white,
	themeBottomTabBarNavigationBackgroundColor: darkBlack,
};

export const theme: Theme = {
	fontFamily,
	colors,
	themeType: darkTheme,
};
