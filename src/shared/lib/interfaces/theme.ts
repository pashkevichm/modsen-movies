import { colors } from '@app/theme/theme';

const { white, black, darkBlack } = colors;

export interface ThemeType {
	themeName: 'light' | 'dark';
	themeBackgroundColor: typeof black | typeof white;
	themeTextColor: typeof white | typeof black;
	themeBottomTabBarNavigationBackgroundColor: typeof white | typeof darkBlack;
}

export interface Theme {
	fontFamily: string;
	colors: typeof colors;
	themeType: ThemeType;
}
