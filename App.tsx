import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import NavBar from './src/components/NavBar';
import { useDynamicStyles } from './src/styling/Styles';
import ListPage from './src/pages/ListPage';
import ProfilePage from './src/pages/ProfilePage';
import SettingsPage from './src/pages/SettingsPage';
import { AppProvider } from './src/context/Context';

function App(): React.JSX.Element {
  const styles = useDynamicStyles();
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
    <AppProvider>
      <SafeAreaView style={styles.appSafeAreaContainer}>
        <View style={styles.appContentContainer}>
          {renderPage()}
        </View>
        <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
