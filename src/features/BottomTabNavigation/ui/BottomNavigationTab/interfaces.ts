import type { ReactNode } from 'react';

export interface BottomNavigationTabProps {
	onPress: () => void;
	onLongPress: () => void;
	tabIcon: ReactNode;
	isActive: boolean;
}
