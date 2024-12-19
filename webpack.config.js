const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@shopify/react-native-skia']
    }
  }, argv);

  // Customize the config before returning it.
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native-reanimated': 'react-native-reanimated',
    '@shopify/react-native-skia': '@shopify/react-native-skia/lib/module/web'
  };

  return config;
}; 