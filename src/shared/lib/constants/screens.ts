import { HomeScreen } from '@screens/HomeScreen';
import { TopFilmsScreen } from '@screens/TopFilmsScreen';
import { TicketsScreen } from '@screens/TicketsScreen';
import { ProfileScreen } from '@screens/ProfileScreen';

import { SCREEN_NAMES } from './screenNames';

import type { Screen } from '../interfaces/screen';

const { HOME, TOPFILMS, TICKETS, PROFILE } = SCREEN_NAMES;

export const screens: Screen[] = [
	{
		name: HOME,
		component: HomeScreen,
	},
	{
		name: TOPFILMS,
		component: TopFilmsScreen,
	},
	{
		name: TICKETS,
		component: TicketsScreen,
	},
	{
		name: PROFILE,
		component: ProfileScreen,
	},
];
