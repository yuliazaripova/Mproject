import React, { useCallback, useEffect, useState } from 'react';
import {StyleSheet, ScrollView, View, Text, FlatList} from 'react-native';
import Product from './product';
import ViewAllBtn from '../../../common/view-all-btn';
import { MAIN_BLUE } from '../../../../assets/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryName, fetchCategoryProducts, FETCH_CATEGORY_PRODUCTS } from '../../../../services/categories/actions';
import { getCategoryName, getCategoryNameLoading, getCategoryNameState, getCategoryProducts, getCategoryProductsData, getCategoryProductsLoading, IName } from '../../../../services/categories/selectors';
import { getQuery } from '@redux-requests/core';

interface IProductList {

}

const ProductList: React.FC<IProductList> = () => {
    const dispatch = useDispatch()
    //const { data, error, loading, pristine } = getQuery(state, { type: FETCH_CATEGORY_PRODUCTS });

    useEffect(() => {
        dispatch(fetchCategoryName(50))
        dispatch(fetchCategoryProducts(50, 1, 4))
      }, [dispatch])

    
    const name = useSelector(getCategoryName)
    const products = useSelector(getCategoryProductsData)
    const loadingName = useSelector(getCategoryNameLoading)
    const loadingProducts = useSelector(getCategoryProductsLoading)
    const loading = loadingName || loadingProducts
   
    

    const renderItem = useCallback(
        (item) => <Product item={item} key={item.id}/>,
    [],
    )
    if (loading) {
        return <Text>{loading}</Text>
    }
    return (<>  
       
        {products && 
        <ScrollView>
            <View>
                <View style={styles.category}>
                 <Text style={styles.categoryName}>{name}</Text> 
                    <ViewAllBtn id={50} />                
                </View>
                <View style={styles.productContainer}>
                    {products &&
                    //  <FlatList
                    //          data={products.rows}
                    //          renderItem={(item) => <Product item={item} />}
                    //          keyExtractor={item => item.id.toString()}/>
                    products.rows.map(renderItem)
}
                </View>
            </View>
        </ScrollView>
}
         </>       
    )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    category: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 10,
    },
    categoryName: {
        color: MAIN_BLUE,
        fontSize: 20,
        alignSelf: 'center'

    }
})
export default ProductList;