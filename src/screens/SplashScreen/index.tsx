import { Component } from 'react';

import SplashScreen from 'react-native-splash-screen';

export default class WelcomePage extends Component {
	componentDidMount() {
		// do stuff while splash screen is shown
		// After having done stuff (such as async tasks) hide the splash screen
		setTimeout(() => {
			SplashScreen.hide();
		}, 4000);
	}

	render() {
		return null;
	}
}
