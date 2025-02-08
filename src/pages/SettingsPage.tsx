import React, { useContext } from 'react';
import { View } from 'react-native';
import { useDynamicStyles } from '../../src/styling/Styles';
import PageTitle from '../components/PageTitle';
import FloatingButton from '../components/FloatingButton';
import { AppContext } from '../context/Context';

const SettingsPage = () => {
  const { setTheme } = useContext(AppContext);
  const styles = useDynamicStyles();
  
  return (
    <View style={styles.pageContainer}>
      <PageTitle text="Settings" />
      <View style={[styles.pageContent, styles.pageContentCenter]}>
        <View style={styles.row}>
        <FloatingButton text={'Light Theme'} onPress={() => setTheme('Light')} />
        <FloatingButton text={'Dark Theme'} onPress={() => setTheme('Dark')} />
        </View>
      </View>
    </View>
  );
};

export default SettingsPage;
