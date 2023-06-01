import { ScrollView } from 'react-native';

import { StyledAppSafeAreaView } from './styled';

import type { LayoutProps } from './interfaces';

export const Layout = ({ children, isScrollView = false }: LayoutProps) => {
	return (
		<StyledAppSafeAreaView>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</StyledAppSafeAreaView>
	);
};
