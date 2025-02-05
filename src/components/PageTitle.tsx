import React from 'react';
import { Text } from 'react-native';
import styles from '../../src/styling/Styles';

type PageTitleProps = {
    text?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ text = '' }) => {
    return (
        <Text style={styles.pageTitle}>{text}</Text>
    );
};

export default PageTitle;
