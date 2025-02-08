import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDynamicStyles } from '../styling/Styles';
import CogIcon from '../../assets/images/Cog.png';
import PlantIcon from '../../assets/images/Plant.png';
import UserIcon from '../../assets/images/User.png';
import CogOrangeIcon from '../../assets/images/CogOrange.png';
import PlantOrangeIcon from '../../assets/images/PlantOrange.png';
import UserOrangeIcon from '../../assets/images/UserOrange.png';

interface NavBarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  currentPage: string;
}

const getIconForPage = (page: string, isActive: boolean) => {
  if (page === 'Settings') return isActive ? CogOrangeIcon : CogIcon;
  if (page === 'List') return isActive ? PlantOrangeIcon : PlantIcon;
  if (page === 'Profile') return isActive ? UserOrangeIcon : UserIcon;
  return null;
};

const NavBar: React.FC<NavBarProps> = ({ setCurrentPage, currentPage }) => {
  const styles = useDynamicStyles();

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
            source={getIconForPage(page, currentPage === page)!}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
