import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../src/styling/Styles';

const SettingsPage = () => {
  return (
    <View style={styles.pageContainer}>
      <Text>Settings Page</Text>
      <Text>Light / Dark theme toggle</Text>
    </View>
  );
};

export default SettingsPage;
