import type { ImageSourcePropType } from 'react-native/types';
import type { Screen } from '@shared/lib/interfaces/screen';

export interface BottomNavigationScrren extends Screen {
	tabBarIconPath: ImageSourcePropType;
}
