/**
 * File Name: Listitem.tsx
 * Description: An individual plant list item
 */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDynamicStyles } from '../../src/styling/Styles';
import { Plant } from '../../constants/interfaces';

const ListItem: React.FC<Plant> = ({date, imageUrl, name, note }) => {
    const styles = useDynamicStyles();

    return (
        <View style={styles.listItemContainer}>
            <View style={styles.listItemImageContainer}>
                <Image
                    source={imageUrl ? { uri: imageUrl } : require('../../assets/images/PlaceHolderPlant.png')}
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
