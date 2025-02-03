import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import NavBar from './src/components/NavBar';
import styles from './src/styling/Styles';
import ListPage from './src/pages/ListPage';
import ProfilePage from './src/pages/ProfilePage';
import SettingsPage from './src/pages/SettingsPage';

function App(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState('List');

  const renderPage = () => {
    switch (currentPage) {
      case 'List':
        return <ListPage />;
      case 'Profile':
        return <ProfilePage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <ListPage />;
    }
  };

  return (
    <SafeAreaView style={styles.appSafeAreaView}>
      <View style={styles.appContentView}>
        {renderPage()}
      </View>
      <NavBar setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
}

export default App;
