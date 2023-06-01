import React, { useEffect } from 'react';

import { useTheme } from '@shared/lib/hooks/useTheme';
import { TopFilmsScreen } from '@screens/TopFilmsScreen';
import { Layout } from '@app/wrappers/Layout';
import { store } from '@app/store/store';

import { ThemeProvider } from 'styled-components';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

function App(): JSX.Element {
	const { appTheme } = useTheme();

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Provider store={store}>
			<ThemeProvider theme={appTheme}>
				<Layout>
					<TopFilmsScreen />
				</Layout>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
