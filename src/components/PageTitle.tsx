import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../src/styling/Styles';

type PageTitleProps = {
    text?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ text = '' }) => {
    return (
        <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>{text}</Text>
        </View>
    );
};

export default PageTitle;
