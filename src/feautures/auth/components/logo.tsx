import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { LIGHT_BLUE } from '../../../assets/constants';

const Logo: React.FC = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Ecommerce</Text>
      <Text style={styles.titleText}>store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    color: LIGHT_BLUE,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
});

export default Logo;
