# Plant App

## About
A cross-platform mobile app, made in a week. The app enables the user to store a virtual record of their plants. Users can attach a local image or take a new one through the device camera. 

<br/>

## Run the app
- Install Node.js & npm
- npm install

### Android
- Ensure you have Android Studio installed and set up
- Install Java (JDK 17) and define it as a environment variable
- npx react-native run-android
  
### IOS
- Ensure you have Xcode installed and set up
- cd ios && pod install && cd ..
- npx react-native run-ios

### Notes
- Using the run commands with an Android or IOS device connected will run the app on the connected device. Otherwise it will run it on an emulator.

<br/>

## Screenshots

<img src="gitHubImages/Nav bar and theme.gif" width= "300"/>
GIF showing the nav bar and the light/dark themes

<br/> <br/>

<img src="gitHubImages/List view.gif" width= "300"/>
GIF showing the list view in both themes

<br/> <br/>

<img src="gitHubImages/Local image selection.gif" width= "300"/>
GIF showing the user add a plant with a local image

<br/> <br/>

<img src="gitHubImages/Camera opened through app.gif" width= "300"/>
GIF showing the user add a plant with a image taken via the device camera

<br/> <br/>

<img src="gitHubImages/Deleting a plant.gif" width= "300"/>
GIF showing the user delete a plant

<br/> <br/>

## Technology

Technology  | What it does
------------- | -------------
createContext | An inbuilt package where the projects global values are stored
React Native | The application's framework/environment. Has many built in processes and makes it easy integrate new technologies
react-native-image-picker | A package which enables the selection of local device images and the use of the camera
TypeScript Execute (tsx) | The default language for modern React Native projects
