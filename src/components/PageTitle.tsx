/**
 * File Name: PageTitle.tsx
 * Description: The project page titles
 */
import React from 'react';
import { Text, View } from 'react-native';
import { useDynamicStyles } from '../../src/styling/Styles';

type PageTitleProps = {
    text?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ text = '' }) => {
    const styles = useDynamicStyles();

    return (
        <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>{text}</Text>
        </View>
    );
};

export default PageTitle;
