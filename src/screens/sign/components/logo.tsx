import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    color: '#00BFFF',
  },
  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
