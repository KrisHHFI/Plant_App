import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../src/styling/Styles';

interface ListItemProps {
    date: Date;
    image: string;
    name: string;
}

const ListItem: React.FC<ListItemProps> = ({ name, date, image }) => {
    return (
        <View style={styles.listItemContainer}>
            <Image
                source={image ? { uri: image } : require('../../assets/images/PlaceHolderPlant.png')}
                style={styles.listItemImage}
            />
            <Text>{name}</Text>
            <Text>{date.toLocaleDateString()}</Text>
        </View>
    );
};

export default ListItem;
