import type { ReactNode } from 'react';

export interface IButtonProps {
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
	fontWeight?: 'normal' | 'bold';
	fontSize?: number;
	textColor?: string;
	onPress?: () => void;
}
