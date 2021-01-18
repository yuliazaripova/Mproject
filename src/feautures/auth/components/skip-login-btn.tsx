import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { MAIN_BLUE, WHITE } from '../../../assets/constants';
import { useNavigation } from '@react-navigation/native';

interface ISkipLoginBtn {
  onPress?: () => void;
}

const SkipLoginBtn: React.FC<ISkipLoginBtn> = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate('Main')}>
      <View style={styles.button}>
        <Text style={styles.text}>Skip login</Text>
        <FontAwesomeIcon icon={faArrowRight} style={styles.icon} size={20}/>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    color: MAIN_BLUE,
    textTransform: 'uppercase',
  },
  icon: {
    color: '#00BFFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 8,
    borderTopColor: WHITE,
    borderTopWidth: 1,
    marginVertical: 16,
  },
});

export default SkipLoginBtn;
