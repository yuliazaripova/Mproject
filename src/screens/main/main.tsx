import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './components/header';
import SearchInput from './components/search-input';

const Main: React.FC = () => {
  return (
    <>
    <Header/>
    <SearchInput/>
    </>
  )
}

export default Main;
