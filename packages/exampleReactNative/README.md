# Running

Make sure Xcode (iOS) and Android Studio (Android) are installed. Also make sure [CocoaPods](https://cocoapods.org/) and a JDK are installed.

1. `cd exampleReactNative/../../` i.e. the project root
1. `yarn install` and `yarn build`
1. `cd packages/exampleReactNative`
1. `yarn copy-workspace-packages`
1. `cd ios && pod install`
1. `yarn start`
1. Build the apps and start the simulators (in a new terminal)
  - iOS: `yarn ios --simulator="iPhone 11"` where `iPhone 11` is replaced with the name of the installed simulator
  - Android: `yarn android`

The first time metro bundles the package, it will hang at 98% and take about 10 minutes to finish.

# Packages

Native packages need to be added to `nohoist` in the `package.json`. There is no need to link them, but `cd ios && pod install` must be run after yarn adds the package.

Non-native packages can be yarn added as usual.

# Yarn Workspaces

Metro will watch the build dirs of the packages in `packages/*` for changes, as well as use the `node_modules` of the root folder. However, packages that depend on the `nohoist`ed `react-native` , such as `reactnative-identicon`, must be copied to the local `node_modules` folder. See `metro.config.js` and `package.json`'s scripts for details.

# Screenshots

iOs                         |  Android
:-------------------------:|:-------------------------:
![](https://i.imgur.com/ttYwAMg.png)  |  ![](https://i.imgur.com/axt1X9n.jpg)
