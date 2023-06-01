import { StyledAppSafeAreaView } from './styled';

import type { LayoutProps } from './interfaces';

export const Layout = ({ children }: LayoutProps) => {
	return <StyledAppSafeAreaView>{children}</StyledAppSafeAreaView>;
};
