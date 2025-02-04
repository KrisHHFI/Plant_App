import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/Styles';

interface NavBarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  currentPage: string;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentPage, currentPage }) => {
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
          <Text style={currentPage === page ? styles.navBarButtonTextActive : styles.navBarButtonText}>
            {page}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
