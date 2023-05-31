module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          interfaces: './src/interfaces',
          hooks: './src/hooks',
          utils: './src/utils',
          types: './src/types',
          constants: './src/constants',
          screens: './src/screens',
          theme: './src/theme',
        },
      },
    ],
  ],
};
