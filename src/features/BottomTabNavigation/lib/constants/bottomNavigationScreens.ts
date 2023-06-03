import { HomeScreen } from '@screens/HomeScreen';
import { ProfileScreen } from '@screens/ProfileScreen';
import { TicketsScreen } from '@screens/TicketsScreen';
import { TopFilmsScreen } from '@screens/TopFilmsScreen';
import { SCREEN_NAMES } from '@shared/lib/constants/screenNames';

import type { BottomNavigationScrren } from '../../interfaces';

const { HOME, TOPFILMS, TICKETS, PROFILE } = SCREEN_NAMES;

export const bottomNavigationScreens: BottomNavigationScrren[] = [
	{
		name: HOME,
		component: HomeScreen,
		tabBarIconPath: require('@app/assets/icons/home-white.png'),
	},
	{
		name: TOPFILMS,
		component: TopFilmsScreen,
		tabBarIconPath: require('@app/assets/icons/medal-white.png'),
	},
	{
		name: TICKETS,
		component: TicketsScreen,
		tabBarIconPath: require('@app/assets/icons/ticket-white.png'),
	},
	{
		name: PROFILE,
		component: ProfileScreen,
		tabBarIconPath: require('@app/assets/icons/profile-white.png'),
	},
];
