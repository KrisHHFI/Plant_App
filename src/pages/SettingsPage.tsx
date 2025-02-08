import { AppContext } from '../context/Context';
import FloatingButton from '../components/FloatingButton';
import PageTitle from '../components/PageTitle';
import React, { useContext } from 'react';
import { useDynamicStyles } from '../../src/styling/Styles';
import { View } from 'react-native';

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
