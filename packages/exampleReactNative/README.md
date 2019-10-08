# Running

For iOS, make sure that Xcode and [CocoaPods](https://cocoapods.org/) are installed.

For Android, make sure that Android Studio and a JDK are installed.

At the repo root, run the bundler `yarn example:rn:packager` and, in a new terminal, `yarn example:rn:ios` or `yarn example:rn:android`.

If the iOS run complains about a missing simulator, use `yarn ios --simulator="iPhone 11"`, where `iPhone 11` is replaced with an installed simulator (see `xcrun simctl list devices`)

The first time metro bundles the package, it will hang at 98% and take about 10 minutes to finish. Just refresh the simulator when it finishes.

# Packages

Native packages need to be added to `nohoist` in the `package.json`. There is no need to link them, but `cd ios && pod install` must be run after yarn adds the package.

Non-native packages can be yarn added as usual.

Replacements for node builtin packages can be added in the `extraNodeModules` section of `metro.config.js`. Some node packages will expect global variables to be set, these are set in `nodeGlobalsShim.js`

# Yarn Workspaces

Metro will watch the build dirs of the packages in `packages/*` for changes, as well as use the `node_modules` of the root folder. However, packages that depend on the `nohoist`ed `react-native` , such as `reactnative-identicon`, must be copied to the local `node_modules` folder. See `metro.config.js` and `package.json`'s scripts for details.

# Screenshots

iOs                         |  Android
:-------------------------:|:-------------------------:
![](https://i.imgur.com/ttYwAMg.png)  |  ![](https://i.imgur.com/axt1X9n.jpg)
