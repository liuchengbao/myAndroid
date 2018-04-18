/**
 * Created by USER on 18/3/27.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Actions} from 'react-native-router-flux';
import ImgList from '../../img/img';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      verificationCode: null
    };
  }

  homePage() {
    if (this.state.phone === null) {
      ToastAndroid.showWithGravity('请输入手机号', ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (this.state.verificationCode === null) {
      ToastAndroid.showWithGravity('请输入验证码', ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else {
      Actions.tabbar();
    }
  }

  onChangPhone(text) {
    this.setState({
      phone: text
    });
  }

  verificationCode(text) {
    this.setState({
      verificationCode: text
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
      >
        <View
          style={styles.loginTop}
        >
          <Image
            source={ImgList.img.logo}
            style={styles.logoStyles}
          />
          <Text
            style={styles.welcomeName}
          >
            欢迎来到我和你的世界
          </Text>
        </View>
        <View
          style={styles.loginTop}
        >
          <View
            style={styles.TextInputContiner}
          >
            <Text
              style={styles.inputTextStyle}
            >
              +86
            </Text>
            <TextInput
              placeholder="请输入手机号"
              style={styles.inputStyle}
              underlineColorAndroid="transparent"
              onChangeText={text => this.onChangPhone(text)}
            />
          </View>
          <View
            style={styles.TextInputContiner}
          >
            <TextInput
              placeholder="请输入验证码"
              style={styles.inputStyle}
              underlineColorAndroid="transparent"
              onChangeText={text => this.verificationCode(text)}
            />
            <TouchableOpacity>
              <Text
                style={styles.inputTextStyle}
              >
                获取验证码
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginTop}>
          <Button
            style={styles.loginButton}
            title="进入"
            onPress={() => this.homePage()}
          />
        </View>
        <View>
          <Text
            style={styles.loginBottom}
          >
            验证码登陆 无需注册
          </Text>
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
  loginTop: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logoStyles: {
    width: 60,
    height: 60,
    marginBottom: 60
  },
  welcomeName: {
    fontSize: 22,
    color: '#000000',
  },
  TextInputContiner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#ddd'
  },
  inputStyle: {
    flex: 1,
  },
  inputTextStyle: {},
  loginButton: {
    color: '#e4393c',
    height: 40,
  },
  loginBottom: {
    flex: 1,
    textAlign: 'center'
  }
});
