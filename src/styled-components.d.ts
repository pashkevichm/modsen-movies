import 'styled-components';
import type { Theme } from '@interfaces/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
