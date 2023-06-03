import { BottomNavitationTabBarWrapper } from './styled';

import { BottomNavigationTab } from '../BottomNavigationTab';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export function BottomNavigationTabBar({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) {
	return (
		<BottomNavitationTabBarWrapper>
			{state.routes.map((route, index) => {
				const { key, name } = route;
				const { options } = descriptors[key];
				const renderTabBarIcon = options.tabBarIcon;

				const isFocused = state.index === index;

				const renderedTabBarIcon =
					renderTabBarIcon !== undefined
						? renderTabBarIcon({
								focused: isFocused,
								color: '',
								size: 0,
						  })
						: null;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(name);
					}
				};
				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: key,
					});
				};

				return (
					<BottomNavigationTab
						key={name}
						onPress={onPress}
						onLongPress={onLongPress}
						tabIcon={renderedTabBarIcon}
						isActive={isFocused}
					/>
				);
			})}
		</BottomNavitationTabBarWrapper>
	);
}
