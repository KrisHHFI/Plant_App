/**
 * File Name: FloatingButton.tsx
 * Description: The text and icon buttons seen across the app
 */
import React, { useContext } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { useDynamicStyles } from '../../src/styling/Styles';
import { AppContext } from '../context/Context';
import CrossIcon from '../../assets/images/Cross.png';
import { FloatingButtonProps } from '../../constants/interfaces';
import PlusIcon from '../../assets/images/Plus.png';
import TickIcon from '../../assets/images/Tick.png';
import CrossIconBlack from '../../assets/images/CrossBlack.png';
import PlusIconBlack from '../../assets/images/PlusBlack.png';
import TickIconBlack from '../../assets/images/TickBlack.png';

const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress, text = '' }) => {
    const styles = useDynamicStyles();
    const { theme } = useContext(AppContext);
    const isDarkTheme = theme === 'Dark';

    const getIcon = (icon: any, iconBlack: any) => (isDarkTheme ? iconBlack : icon);

    if (text === '+' || text === '✔' || text === 'x') {
        return (
            <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
                {text === '+' && <Image source={getIcon(PlusIcon, PlusIconBlack)} style={{ width: 30, height: 30 }} />}
                {text === '✔' && <Image source={getIcon(TickIcon, TickIconBlack)} style={{ width: 30, height: 30 }} />}
                {text === 'x' && <Image source={getIcon(CrossIcon, CrossIconBlack)} style={{ width: 30, height: 30 }} />}
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
