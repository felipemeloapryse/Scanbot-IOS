export default ({ config }) => {
  return {
    ...config,

    name: "scanbot-ios",
    slug: "scanbot-ios",
    version: "1.0.0",
    orientation: "portrait",
    scheme: "scanbotios",
    userInterfaceStyle: "automatic",

    newArchEnabled: false,

    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.scanbotios"
    },

    android: {
      package: "com.anonymous.scanbotios"
    },

    plugins: [
      "expo-router",
      [
        "react-native-scanbot-sdk",
        {
          iOSCameraUsageDescription: "Barcode Camera permissions",
          androidCameraPermission: true,
          androidCameraFeature: true,
          mavenURLs: true,
          largeHeap: true,
          mavenURLs: true,
          ocrBlobsDirPath: "./assets/ocr_blobs"
        }
      ]
    ]
  };
};