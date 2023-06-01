module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
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
