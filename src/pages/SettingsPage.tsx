import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../src/styling/Styles';
import PageTitle from '../components/PageTitle';
import FloatingButton from '../components/FloatingButton';

const SettingsPage = () => {
  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Settings" />
      <View style={[styles.pageContent, styles.pageContentCenter]}>
        <View style={styles.row}>
          <FloatingButton text={'Light Theme'} />
          <FloatingButton text={'Dark Theme'} />
        </View>
      </View>
    </View>
  );
};

export default SettingsPage;
