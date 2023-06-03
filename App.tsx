import React, { useEffect } from 'react';

import { useTheme } from '@shared/lib/hooks/useTheme';
import { Layout } from '@app/wrappers/Layout';
import { store } from '@app/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from '@features/BottomTabNavigator';

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
					{/* <Layout></Layout> */}
					<BottomTabNavigator />
				</ThemeProvider>
			</Provider>
		</NavigationContainer>
	);
}

export default App;
