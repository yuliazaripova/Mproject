import React, { useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './components/header';
import SearchInput from './components/search-input';
import CategoryList from './components/category-list/category-list';
import ProductList from './components/product-list/product-list';
import { ScrollView, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchCategoryName, fetchCategoryProducts } from '../../services/categories/actions';

const Main: React.FC = () => {
  return (
    <View>
      <StatusBar translucent={true}/>
    <ScrollView>
      
      <View style={styles.container}>
        <Header/>
        <SearchInput/>
        <CategoryList/>
        <ProductList/>
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start'
  }
})

export default Main;
