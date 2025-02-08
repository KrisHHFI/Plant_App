import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDynamicStyles } from '../styling/Styles';
import PageTitle from '../components/PageTitle';

const ProfilePage = () => {
  const styles = useDynamicStyles();
  
  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Profile" />
      <View style={styles.pageContent}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={[styles.pText, styles.paddingSmall]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfilePage;
