/**
 * Created by USER on 18/4/11.
 */
/**
 * Created by USER on 18/3/27.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export default class Setting extends Component {
  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
      >
        <View>
          <Text>123456</Text>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
});
