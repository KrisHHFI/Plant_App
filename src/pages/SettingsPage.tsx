import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../src/styling/Styles';
import PageTitle from '../components/PageTitle';

const SettingsPage = () => {
  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Hydroponic Settings"/>
      <Text>Light / Dark theme toggle</Text>
    </View>
  );
};

export default SettingsPage;
