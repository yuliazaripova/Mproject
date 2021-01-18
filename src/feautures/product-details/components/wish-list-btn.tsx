import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faHeart,
  } from '@fortawesome/free-solid-svg-icons';
import { MAIN_BLUE, WHITE } from '../../../assets/constants';

interface IWishListBtn {

}

const WishListBtn: React.FC<IWishListBtn> = () => {
    return (
        <TouchableHighlight 
            style={styles.btn}
            onPress={() => console.log('fff')}>
                <View style={styles.btnContainer}>
                    <FontAwesomeIcon icon={faHeart} style={styles.icon} size={20}/>
                    <Text style={styles.text}>Wishlist</Text>
                </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: WHITE,
        flex: 1,
        justifyContent: 'center'
    },
    btnContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        
    },
    text: {
        color: MAIN_BLUE,
        fontSize: 16,
    },
    icon: {
        color: MAIN_BLUE,
        marginRight: 10,
    }
})

export default WishListBtn;
