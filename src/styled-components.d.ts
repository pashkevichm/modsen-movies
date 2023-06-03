import 'styled-components';
import type { Theme } from '@shared/lib/interfaces/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
