/**
 * Created by USER on 18/3/9.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Swiper from 'react-native-swiper';

export default class Starting extends Component {
  goOut() {
    Actions.login();
  }

  render() {
    return (
      <Swiper
        loop={false}
        style={styles.wrapper}
        showsButtons={false}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>你好，朋友</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>欢迎来到我的世界</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>让我们开始进入奇妙世界</Text>
          <TouchableOpacity
            style={styles.goOut}
          >
            <Text
              style={styles.goOutText}
              onPress={() => this.goOut()}
            >
              立即体验
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  goOut: {
    position: 'absolute',
    zIndex: 100,
    bottom: 100,
    backgroundColor: '#841584',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10
  },
  goOutText: {
    color: '#FFFFFF'
  }
});

