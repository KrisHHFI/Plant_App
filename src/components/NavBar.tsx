/**
 * File Name: NavBar.tsx
 * Description: The project nav bar
 */
import { AppContext } from '../context/Context';
import CogIcon from '../../assets/images/Cog.png';
import CogIconOrange from '../../assets/images/CogOrange.png';
import CogIconWhite from '../../assets/images/CogWhite.png';
import { Image, TouchableOpacity, View } from 'react-native';
import { NavBarProps } from '../../constants/interfaces';
import PlantIcon from '../../assets/images/Plant.png';
import PlantIconOrange from '../../assets/images/PlantOrange.png';
import PlantIconWhite from '../../assets/images/PlantWhite.png';
import React, { useContext } from 'react';
import { useDynamicStyles } from '../styling/Styles';
import UserIcon from '../../assets/images/User.png';
import UserIconWhite from '../../assets/images/UserWhite.png';
import UserIconOrange from '../../assets/images/UserOrange.png';

const getIconForPage = (page: string, isActive: boolean, isDarkTheme: boolean) => {
  if (isActive) {
    if (page === 'Settings') return CogIconOrange;
    if (page === 'List') return PlantIconOrange;
    if (page === 'Profile') return UserIconOrange;
  } else {
    if (isDarkTheme) {
      if (page === 'Settings') return CogIconWhite;
      if (page === 'List') return PlantIconWhite;
      if (page === 'Profile') return UserIconWhite;
    } else {
      if (page === 'Settings') return CogIcon;
      if (page === 'List') return PlantIcon;
      if (page === 'Profile') return UserIcon;
    }
  }
  return null;
};

const NavBar: React.FC<NavBarProps> = ({ setCurrentPage, currentPage }) => {
  const styles = useDynamicStyles();
  const { theme } = useContext(AppContext);
  const isDarkTheme = theme === 'Dark';

  return (
    <View style={styles.navBarContainer}>
      {['List', 'Profile', 'Settings'].map((page) => (
        <TouchableOpacity
          key={page}
          style={[
            styles.navBarButton,
            currentPage === page && styles.navBarButtonActive,
          ]}
          onPress={() => setCurrentPage(page)}
        >
          <Image
            source={getIconForPage(page, currentPage === page, isDarkTheme)!}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
