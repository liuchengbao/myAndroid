/**
 * Created by USER on 18/4/2.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import ImgList from '../img/img'

export default class SingleMessage extends Component {
  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const data = this.props;
    if (data.list.who !== 'me') {
      return (
        <View style={styles.singleMessageBlock}>
          <Image source={data.avatar} style={[styles.avatar, {marginRight: 10}]} />
          <View style={styles.messageView}>
            <Text style={styles.messageText}>{data.list.message}</Text>
          </View>
          <View style={[styles.blank, {marginLeft: 10}]}>
            <Text>{}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.singleMessageBlock}>
        <View style={[styles.blank, {marginRight: 10}]}>
          <Text>{}</Text>
        </View>
        <View style={[styles.messageView, {justifyContent: 'flex-end'}]}>
          <Text style={[styles.messageText, {backgroundColor: '#67db72'}]}>{data.list.message}</Text>
        </View>
        <Image source={this.props.avatarMyself} style={[styles.avatar, {marginLeft: 10}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  singleMessageBlock: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  avatar: {
    width: 40,
    height: 40,
    paddingRight: 10,
    borderRadius: 5
  },
  messageView: {
    flex: 1,
    flexDirection: 'row',
  },
  messageText: {
    // height:50,
    lineHeight: 25,
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10
  },
  blank: {
    width: 40,
    height: 40,
  }
});
