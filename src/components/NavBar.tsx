import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/Styles';

const NavBar = () => {
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity style={styles.navBarButton} onPress={() => console.log('List pressed')}>
        <Text>List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarButton} onPress={() => console.log('Profile pressed')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarButton} onPress={() => console.log('Settings pressed')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
