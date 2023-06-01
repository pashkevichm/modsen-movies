import React, { useEffect } from 'react';

import { SafeAreaView, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<SafeAreaView>
			<Text>Help</Text>
		</SafeAreaView>
	);
}

export default App;
