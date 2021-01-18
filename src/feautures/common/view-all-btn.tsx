import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import { MAIN_BLUE, WHITE } from '../../assets/constants';

interface IViewAllBtn {
    id: number
}

const ViewAllBtn: React.FC<IViewAllBtn> = ({id}) => {
    const navigation = useNavigation()
    return (
        <TouchableHighlight
            style={styles.btn}
            onPress={() => navigation.navigate("CategotyDetails", {categoryId: id})}>
                <Text style={styles.text}>View all</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        backgroundColor: MAIN_BLUE,
        justifyContent: 'center',
        borderRadius: 5
    },
    text: {
        color: WHITE,
        fontSize: 12
    }
})

export default ViewAllBtn;
