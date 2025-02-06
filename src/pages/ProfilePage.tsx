import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../src/styling/Styles';
import PageTitle from '../components/PageTitle';

const ProfilePage = () => {
  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Profile"/>
      <View style={styles.pageContent}></View>
    </View>
  );
};

export default ProfilePage;
