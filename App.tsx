import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import NavBar from './src/components/NavBar';
import styles from './src/styling/Styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appSafeAreaView}>
      <View style={styles.appContentView}>
        <Text>Home page</Text>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}

export default App;
