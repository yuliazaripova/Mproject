import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Category from './category';

interface ICategoryList {

}

const CategoryList: React.FC<ICategoryList> = () => {
    return (
        <ScrollView style={styles.container} horizontal={true}>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    }
})
export default CategoryList;
