import React, { useEffect } from 'react';

import { useTheme } from '@shared/lib/hooks/useTheme';
import { store } from '@app/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from '@features/BottomTabNavigation';

import { ThemeProvider } from 'styled-components';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

function App(): JSX.Element {
	const { appTheme } = useTheme();
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<NavigationContainer>
			<Provider store={store}>
				<ThemeProvider theme={appTheme}>
					<BottomTabNavigation />
				</ThemeProvider>
			</Provider>
		</NavigationContainer>
	);
}

export default App;
