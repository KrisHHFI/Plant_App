# Plant App

## About
I was excited to discover that I had been selected to participate in the coding assignment for the mobile application developer role. I knew that I was competing with around 50 people. So, I wanted to make something that would distinguish me from the other applicants. I first imagined a Victorian botanical garden themed app, where I could make greenhouse window backgrounds and an ivy slewn nav bar. However, since NOCFO is a modern accounting company, I decided that this theme would be irrelevant. Instead, I planned a modern application with a minor sci-fi theme.

The nav bar, the page titles and the themes were loosely inspired by the ship computers on Star Trek: The Next Generation and the UI seen on the 2015 Star Wars Battlefront game. I tested the application on my Android Phone, a Android emulated device and a IOS emulated device. Sadly I wasn't able to test the application on a physical IOS device. If I had more time I would have polished the styles, added transitions and animations. I have completed the assignment to the full and completed the light/dark bonus task. The user can add plants, use a local image or take one through the app. The user can also edit and delete plants by tapping twice on the plant item.

<br/>

## Run the app
- Install Node.js & npm
- npm install

### Android
- Ensure you have Android Studio installed and set up
- Install Java (JDK 11 or 17) and define it as a environment variable
- npx react-native run-android
  
### IOS
- Ensure you have Xcode installed and set up
- cd ios && pod install && cd ..
- npx react-native run-ios

### Notes
- Using the run commands with an Android or IOS device connected will run the app on the connected device. Otherwise it will run it on an emulator.

<br/>

## Screenshots

<br/>

## Technology

Technology  | What it does
------------- | -------------
createContext | An inbuilt package where the projects global values are stored
React Native | The application's framework/environment. Has many built in processes and makes it easy integrate new technologies
react-native-image-picker | A package which enables the selection of local device images and the use of the camera
TypeScript Execute (tsx) | The default language for modern React Native projects
