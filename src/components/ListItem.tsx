import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../src/styling/Styles';

interface ListItemProps {
    date: Date;
    image: string;
    name: string;
    note: string;
}

const ListItem: React.FC<ListItemProps> = ({ name, date, image, note }) => {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.listItemImageContainer}>
                <Image
                    source={image ? { uri: image } : require('../../assets/images/PlaceHolderPlant.png')}
                    style={styles.listItemImage}
                />
            </View>
            <Text style={styles.listItemTitle}>
                Name: <Text style={styles.boldText}>{name}</Text>
            </Text>
            {note && note.trim() !== "" && (
                <Text style={styles.listItemText}>
                    Notes: <Text style={styles.boldText}>{note}</Text>
                </Text>
            )}
            <Text style={styles.listItemText}>
                Added: <Text style={styles.boldText}>{date.toLocaleDateString()}</Text>
            </Text>
        </View>
    );
};

export default ListItem;
