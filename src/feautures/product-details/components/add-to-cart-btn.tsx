import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import { MAIN_BLUE, WHITE } from '../../../assets/constants';

interface IAddToCartBtn {

}

const AddToCartBtn: React.FC<IAddToCartBtn> = () => {
    return (
        <TouchableHighlight
            style={styles.btn}
            onPress={() => console.log('fff')}>
                <Text style={styles.text}>Add to cart</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: MAIN_BLUE,
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        color: WHITE,
        fontSize: 16,
        alignSelf: 'center',
    }
})

export default AddToCartBtn;