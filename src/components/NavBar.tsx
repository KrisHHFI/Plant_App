import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/Styles';

const NavBar = ({ setCurrentPage }: { setCurrentPage: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => setCurrentPage('List')}>
        <Text>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => setCurrentPage('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => setCurrentPage('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
