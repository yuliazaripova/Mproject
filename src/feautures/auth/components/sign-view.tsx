import React from 'react';
import {View, StyleSheet, KeyboardAvoidingViewBase, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../common/back-btn';
import Logo from './logo';
interface ISignView {
  renderBackBtn?: boolean;
  renderSkipBtn?: boolean;
}

const SignView: React.FC<ISignView> = (props) => {
  return (
    // <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
        colors={['#e6e6fa', '#d8bfd8', '#ffffff']}
        style={styles.linearGradient}>
        {props.renderBackBtn ? <BackButton /> : null}
        <View style={styles.container}>
          <Logo />
          {props.children}
        </View>
      </LinearGradient>
    // </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});

export default SignView;
