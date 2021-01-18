import React, { FC, useCallback, useEffect } from "react"
import { FlatList, SafeAreaView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategoryName, fetchCategoryProducts } from "../../../services/categories/actions"
import { getCategoryProductsData } from "../../../services/categories/selectors"
import styles from "../../auth/screens/styles"
import Product from "./product-list/product"

interface ICategoryDetails {
    id: number,
    name: string
}
//TODO pagination
const CategoryDetails: FC<ICategoryDetails> = ({id, name}) => {
    const {page, total, rows} = useSelector(getCategoryProductsData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoryProducts(50, 1, 4))
      }, [dispatch])
    const renderItem = useCallback(
        (item) => <Product item={item} />,
        [],
        )
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          // Data
          data={}
          renderItem={renderItem}
          keyExtractor={(item, id) => String(id)}
          ListHeaderComponent={renderHeader}
          onEndReached={retrieveMore}
          onEndReachedThreshold={0}
        //   refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    )
}