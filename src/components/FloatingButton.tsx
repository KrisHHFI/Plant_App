import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import styles from '../../src/styling/Styles';
import CrossIcon from '../../assets/images/Cross.png';
import PlusIcon from '../../assets/images/Plus.png';
import TickIcon from '../../assets/images/Tick.png';

interface FloatingButtonProps {
    text?: string;
    onPress?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ text = '', onPress }) => {
    if (text === '+' || text === '✔' || text === 'x') {
        return (
            <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
                {text === '+' && <Image source={PlusIcon} style={{ width: 30, height: 30 }} />}
                {text === '✔' && <Image source={TickIcon} style={{ width: 30, height: 30 }} />}
                {text === 'x' && <Image source={CrossIcon} style={{ width: 30, height: 30 }} />}
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
