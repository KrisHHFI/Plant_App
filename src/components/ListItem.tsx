import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../src/styling/Styles';

interface ListItemProps {
    name: string;
    date: Date;
}

const ListItem: React.FC<ListItemProps> = ({ name, date }) => {
    return (
        <View style={styles.listItemContainer}>
            <Image source={require('../assets/images/PlaceHolderPlant.png')} style={styles.listItemImage} />
            <Text>{name}</Text>
            <Text>{date.toLocaleDateString()}</Text>
        </View>
    );
};

export default ListItem;
