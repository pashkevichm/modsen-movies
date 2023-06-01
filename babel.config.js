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
					'@interfaces': './src/interfaces',
					'@components': './src/components',
					'@hooks': './src/hooks',
					'@utils': './src/utils',
					'@types': './src/types',
					'@constants': './src/constants',
					'@screens': './src/screens',
					'@theme': './src/theme',
				},
			},
		],
	],
};
