import React, { useEffect } from 'react';

import { useTheme } from '@hooks/useTheme';
import { Layout } from '@components/widgets/Layout';

import { ThemeProvider } from 'styled-components';
import {  Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
	const { appTheme } = useTheme();

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<ThemeProvider theme={appTheme}>
			<Layout>
				<Text>1</Text>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
