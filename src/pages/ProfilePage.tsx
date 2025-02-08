/**
 * File Name: ProfilePage.tsx
 * Description: Placeholder user profile page
 */
import PageTitle from '../components/PageTitle';
import { PROFILE_TEXT } from '../../constants/Strings';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDynamicStyles } from '../styling/Styles';

const ProfilePage = () => {
  const styles = useDynamicStyles();

  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Profile" />
      <View style={styles.pageContent}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={[styles.pText, styles.paddingSmall]}>
            {PROFILE_TEXT}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfilePage;
