import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../src/styling/Styles';
import PageTitle from '../components/PageTitle';

const SettingsPage = () => {
  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Hydroponic Settings" />
      <View style={styles.pagePadding}>
        <Text>Light / Dark theme toggle</Text>
      </View>
    </View>
  );
};

export default SettingsPage;
