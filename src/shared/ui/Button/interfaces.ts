import type { ReactNode } from 'react';

export interface IButtonProps {
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';

	onPress?: () => void;
}
