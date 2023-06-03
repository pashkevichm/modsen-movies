import { colors } from '@app/theme/theme';

const { white, black } = colors;

export interface ThemeType {
	themeName: 'light' | 'dark';
	themeBackgroundColor: typeof black | typeof white;
	themeTextColor: typeof white | typeof black;
}

export interface Theme {
	fontFamily: string;
	colors: typeof colors;
	themeType: ThemeType;
}
