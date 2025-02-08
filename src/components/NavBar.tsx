import React, { useContext } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDynamicStyles } from '../styling/Styles';
import { AppContext } from '../context/Context';
import CogIcon from '../../assets/images/Cog.png';
import PlantIcon from '../../assets/images/Plant.png';
import UserIcon from '../../assets/images/User.png';
import CogIconWhite from '../../assets/images/CogWhite.png';
import PlantIconWhite from '../../assets/images/PlantWhite.png';
import UserIconWhite from '../../assets/images/UserWhite.png';
import CogOrangeIcon from '../../assets/images/CogOrange.png';
import PlantOrangeIcon from '../../assets/images/PlantOrange.png';
import UserOrangeIcon from '../../assets/images/UserOrange.png';
import { NavBarProps } from '../../constants/interfaces';

const getIconForPage = (page: string, isActive: boolean, isDarkTheme: boolean) => {
  if (isActive) {
    if (page === 'Settings') return CogOrangeIcon;
    if (page === 'List') return PlantOrangeIcon;
    if (page === 'Profile') return UserOrangeIcon;
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
