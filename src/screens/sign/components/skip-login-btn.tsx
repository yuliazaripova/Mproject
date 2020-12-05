import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

interface ISkipLoginBtn {
  onPress?: () => void;
}

const SkipLoginBtn: React.FC<ISkipLoginBtn> = () => {
  return (
    <TouchableHighlight onPress={() => console.log('f')}>
      <View style={styles.button}>
        <Text style={styles.text}>Skip login</Text>
        <FontAwesomeIcon icon={faArrowRight} style={styles.icon} size={20}/>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#00BFFF',
    textTransform: 'uppercase',
  },
  icon: {
    color: '#00BFFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    borderTopColor: 'white',
    borderTopWidth: 1,
    marginTop: 20,
  },
});

export default SkipLoginBtn;
