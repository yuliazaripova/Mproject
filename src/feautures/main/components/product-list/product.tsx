import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProduct {
    item: {
    id: number,
    cell: {
        name: string,
        thumb: string
    }
}
}

const Product: React.FC<IProduct> = ({item}) => {
    const { id } = item
    const {name, thumb} = item.cell
    const navigation = useNavigation();
    return (
        
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {id: id})}> 
                    <Image style={styles.img} 
                        source={{
                            uri: `http:${thumb}`
                            }}/>
                </TouchableOpacity>    
                <Text numberOfLines={1} style={styles.text}>{name}</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 4,
        borderRadius: 25,

    },
    img: {
        width: 130,
        height: 130,
        resizeMode: 'contain'
    },
})

export default Product;
