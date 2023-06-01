import React, { useEffect } from 'react';

import { useTheme } from '@hooks/useTheme';

import { ThemeProvider } from 'styled-components';
import { SafeAreaView, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
	const { appTheme } = useTheme();

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<ThemeProvider theme={appTheme}>
			<SafeAreaView>
				<Text>Hel</Text>
			</SafeAreaView>
		</ThemeProvider>
	);
}

export default App;
