import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from '@shared/lib/constants/screenNames';
import { screens } from '@shared/lib/constants/screens';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName={SCREEN_NAMES.HOME}
			screenOptions={{ headerShown: false }}
		>
			{screens.map(({ name, component }) => (
				<Tab.Screen key={name} name={name} component={component} />
			))}
		</Tab.Navigator>
	);
};
