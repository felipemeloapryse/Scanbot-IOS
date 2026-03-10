# Scanbot React Native Demo (Expo)

This repository contains a **React Native application built with Expo Router** demonstrating the integration of the **Scanbot SDK** using native builds.

The goal of this repository is to provide a **technical reference project** that can be executed locally on **iOS or Android**.

---

## Requirements

Ensure your environment meets the following requirements before running the project.

| Tool | Required Version |
|-----|----------------|
| Node.js | >= 18 |
| npm | >= 9 |

Verify your installation:

```bash
node -v
npm -v
```

### Install Dependencies

Install all project dependencies defined in package.json.

```bash
npm install
```
This command will:

Install all required libraries

## Create the node_modules directory

Running the Project
#### ⚠️ Important

This project uses native modules, therefore it cannot run inside Expo Go.

Instead, it must be executed using Expo native development builds.

## Run on iOS
### Requirements

Make sure the following tools are installed:
 - macOS
 - Xcode
 - CocoaPods

Verify installations:
```bash
xcodebuild -version
pod --version
```

If CocoaPods is not installed:
```bash
sudo gem install cocoapods
```
## Install Native Dependencies
### Install the required iOS pods:
```bash
cd ios
pod install
cd ..
```
### Start the iOS Build
Run the following command:
```bash
npx expo run:ios
```
#### This will:
 - Build the native iOS project
 - Launch the iOS simulator
 - Install the application
 - Start the Metro bundler

## Run on Android

Make sure an Android emulator is running or a physical device is connected.

Then execute:
```bash
npx expo run:android
```

This command builds the Android project and installs the application on the connected device or emulator.

### Troubleshooting
Clear Metro Cache

If you encounter bundling issues:
```bash
npx expo start --clear
```

