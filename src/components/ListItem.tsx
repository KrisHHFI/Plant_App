import React from 'react';
import { View, Text } from 'react-native';

interface ListItemProps {
    name: string;
}

const ListItem: React.FC<ListItemProps> = ({ name }) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
};

export default ListItem;
