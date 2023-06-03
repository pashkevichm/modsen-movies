import { StyledTouchableOpacity, TabDot } from './styled';

import type { BottomNavigationTabProps } from './interfaces';

export const BottomNavigationTab = ({
	onPress,
	onLongPress,
	tabIcon,
	isActive,
}: BottomNavigationTabProps) => {
	return (
		<StyledTouchableOpacity
			active={isActive}
			activeOpacity={0.2}
			onPress={onPress}
			onLongPress={onLongPress}
		>
			{tabIcon}
			{isActive && <TabDot />}
		</StyledTouchableOpacity>
	);
};
