import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../src/styling/Styles';

interface FloatingButtonProps {
    text?: string;
    onPress?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ text = '', onPress }) => {
    return (
        <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
            <Text style={styles.floatingButtonText} >{text}</Text>
        </TouchableOpacity>
    );
};

export default FloatingButton;
