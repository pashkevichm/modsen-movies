import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from '@shared/lib/constants/screenNames';

import { BottomNavigationTabBar } from './ui/BottomNavitationTabBar/Index';
import { BottonNavigationTabIcon } from './ui/BottomTabBarIcon';
import { bottomNavigationScreens } from './lib/constants/bottomNavigationScreens';

import type { BottomNavigationParamList } from './types';

const Tab = createBottomTabNavigator<BottomNavigationParamList>();

export const BottomTabNavigation = () => {
	return (
		<Tab.Navigator
			backBehavior='history'
			tabBar={(props) => <BottomNavigationTabBar {...props} />}
			initialRouteName={SCREEN_NAMES.HOME}
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'white',
			}}
		>
			{bottomNavigationScreens.map(
				({ name, component, tabBarIconPath }) => (
					<Tab.Screen
						key={name}
						name={name}
						component={component}
						options={{
							tabBarIcon: () => (
								<BottonNavigationTabIcon
									imageSource={tabBarIconPath}
								/>
							),
						}}
					/>
				)
			)}
		</Tab.Navigator>
	);
};
