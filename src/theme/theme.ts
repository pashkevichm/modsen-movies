import type { Theme, ThemeType } from '@interfaces/theme';

export const colors = {
	darkBlack: '#16171F',
	black: '#1E1F27',
	white: '#FFFFF',
	gray: '#D9D9D9',
	darkGray: '#696969',
} as const;

const { white, black, } =
	colors;

export const lightTheme: ThemeType = {
	themeName: 'light',
	themeBackgroundColor: black,
	themeTextColor: white,

};

export const darkTheme: ThemeType = {
	themeName: 'dark',
	themeBackgroundColor: white,
	themeTextColor: black,
};

export const theme: Theme = {
	colors,
	themeType: darkTheme,
};
