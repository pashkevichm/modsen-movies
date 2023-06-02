module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module:react-native-dotenv',
			{
				envName: 'REACT_APP_IMDB_API_KEY',
				moduleName: '@env',
				path: '.env',
			},
		],
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.ts',
					'.tsx',
					'.json',
				],
				alias: {
					'@app': './src/app',
					'@features': './src/features',
					'@screens': './src/screens',
					'@shared': './src/shared',
					'@widgets': './src/widgets',
					'@entities': './src/entities',
				},
			},
		],
	],
};
