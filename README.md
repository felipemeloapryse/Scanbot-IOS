# Scanbot React Native Demo (Expo)

This repository contains a **React Native application built with Expo Router** demonstrating the integration of the **Scanbot SDK** using native builds.

The goal of this repository is to provide a **technical reference project** that can be executed locally on **iOS or Android**.

---


# Requirements

Ensure your environment meets the following requirements before running the project.

| Tool     | Required Version |
| -------- | ---------------- |
| Node.js  | >= 18            |
| npm      | >= 9             |
| JDK      | 17               |
| Expo CLI | Latest           |

Verify your installation:

```bash
node -v
npm -v
java -version
```
---

# Install Project Dependencies

Install all project dependencies defined in `package.json`.

```bash
npm install
```

---

# ⚠️ Important

This project uses **native modules**, therefore it **cannot run inside Expo Go**.

Instead, it must be executed using **Expo native development builds**.

---

# To Run on iOS

## Requirements

Make sure the following tools are installed:

* macOS
* Xcode
* CocoaPods

Verify installations:

```bash
xcodebuild -version
pod --version
```

If CocoaPods is not installed:

```bash
sudo gem install cocoapods
```

---

## Install Native Dependencies

Install the required iOS pods:

```bash
cd ios
pod install
cd ..
```

---

## Run on iOS Simulator

Start the iOS build using:

```bash
npx expo run:ios
```

This will:

* Build the native iOS project
* Launch the iOS simulator
* Install the application
* Start the Metro bundler

---

# Run on a Physical iPhone

## Requirements

To run the app on a real iPhone you must:

* Have an iPhone running iOS 16+
* Install Xcode
* Have an Apple ID
* Enable Developer Mode on the device

A **free Apple developer account** is sufficient.

---

## 1. Add your Apple ID in Xcode

Open **Xcode** and go to:

```
Xcode → Settings → Accounts
```

Click **+** and sign in with your Apple ID.

---

## 2. Connect your iPhone

Connect your iPhone to your Mac using a USB cable.

If prompted on the device, tap:

```
Trust This Computer
```

---

## 3. Enable Developer Mode on the iPhone

On the iPhone go to:

```
Settings → Privacy & Security → Developer Mode
```

Enable **Developer Mode** and restart the device if prompted.

---

## 4. Configure Code Signing

Open the iOS project in Xcode:

```
ios/scanbotios.xcworkspace
```

Then:

1. Select the project in the left sidebar
2. Select the **scanbotios** target
3. Go to **Signing & Capabilities**
4. Select your **Apple ID Team**

Xcode will automatically create a **development provisioning profile**.

---

## 5. Select Your Device

At the top of Xcode select your connected **iPhone** as the run destination.

---

## 6. Run the Application

Run the project using:

```bash
npx expo run:ios --device
```

or press **Run** directly in Xcode.

The application will build and install on your device.

---

## 7. Trust the Developer Certificate

The first time you run the app you may need to trust the developer profile.

On your iPhone go to:

```
Settings → General → VPN & Device Management
```

Select your **Apple ID Developer App** and tap:

```
Trust
```

After this step the app will launch normally.

---

# To Run on Android

## Requirements

Make sure the following tools are installed:

* Android Studio
* Android SDK
* JDK 17
* Android Emulator (or physical Android device)

Verify Java version:

```bash
java -version
```

The output should indicate **JDK 17**.

---

## Android SDK Configuration

Ensure your Android SDK is correctly configured.

Your `android/local.properties` file should contain something similar to:

```
sdk.dir=/Users/your-user/Library/Android/sdk
```

Android Studio normally generates this file automatically.

---

## Start the Android Build

Make sure an Android emulator is running or a physical device is connected.

Then execute:

```bash
npx expo run:android
```

---

# Troubleshooting

## Clear Metro Cache

If you encounter bundling issues:

```bash
npx expo start --clear
```




