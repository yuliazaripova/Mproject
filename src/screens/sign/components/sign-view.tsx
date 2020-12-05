import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../common/back-btn';
import Logo from './logo';
interface ISignView {
  renderBackBtn?: boolean;
  renderSkipBtn?: boolean;
}

const SignView: React.FC<ISignView> = (props) => {
  return (
    <LinearGradient
      colors={['#e6e6fa', '#d8bfd8', '#ffffff']}
      style={styles.linearGradient}>
      {props.renderBackBtn ? <BackButton /> : null}
      <View style={styles.container}>
        <Logo />
        {props.children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignView;
