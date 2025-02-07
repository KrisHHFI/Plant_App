import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../src/styling/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FloatingButtonProps {
    text?: string;
    onPress?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ text = '', onPress }) => {
    if (text === '+' || text === '✔' || text === 'x') {
        return (
            <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
                {text === '+' && <Icon name="plus" size={30} color="white" />}
                {text === '✔' && <Icon name="check" size={30} color="white" />}
                {text === 'x' && <Icon name="times" size={30} color="white" />}
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[styles.floatingButton, text === 'Delete' ? styles.redBackground : styles.floatingButton, styles.floatingButtonTextContainer]}
            onPress={onPress}>
            <Text style={styles.floatingButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default FloatingButton;
