/**
 * Created by USER on 18/3/27.
 */
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {connect} from 'react-redux';

class AboutMe extends Component {
  avatar() {
    Actions.avatar();
  }

  name() {
    Actions.name();
  }

  goBack() {
    Actions.pop();
  }

  goToQrCode() {
    Actions.qrCode();
  }

  moreInformation() {
    Actions.moreInformation()
  }

  render() {
    const {information} = this.props.getPersonalInformation;
    return (
      <View style={styles.container}>
        <View style={styles.avatarHeader}>
          <TouchableOpacity
            style={styles.goBackBlock}
            onPress={() => this.goBack()}
          >
            <Text style={[styles.leftArrow]}>&#xe64a;</Text>
            <Text style={[styles.fontSize16]}>我</Text>
          </TouchableOpacity>
          <Text style={[styles.fontSize16, {flex: 1}]}>个人信息</Text>
          <TouchableOpacity
            onPress={() => this.photo()}
          >
            <Text style={[styles.fontSize20, {width: 88}]} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.avatar()}
          style={{paddingTop: 15}}
        >
          <View style={styles.singleBlock}>
            <Text style={[styles.title, {lineHeight: 50}]}>头像</Text>
            <Image source={information.avatar} style={styles.avatar} />
            <Text style={[styles.rightArrow, {lineHeight: 50}]}>&#xe64d;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.name()}
        >
          <View style={styles.singleBlock}>
            <Text style={styles.title}>名字</Text>
            <Text>{information.name}</Text>
            <Text style={styles.rightArrow}>&#xe64d;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.singleBlock}>
            <Text style={styles.title}>微信号</Text>
            <Text>bao-love-sha</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goToQrCode()}
        >
          <View style={styles.singleBlock}>
            <Text style={styles.title}>我的二维码</Text>
            <Text style={styles.rightArrow}>&#xe64d;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.moreInformation()}
        >
          <View style={styles.singleBlock}>
            <Text style={styles.title}>更多</Text>
            <Text style={styles.rightArrow}>&#xe64d;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.singleBlock, {marginTop: 15}]}>
            <Text style={styles.title}>我的地址</Text>
            <Text style={styles.rightArrow}>&#xe64d;</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function select(state) {
  return {
    getPersonalInformation: state.getPersonalInformation
  };
}
export default connect(select)(AboutMe);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarHeader: {
    flexDirection: 'row',
    backgroundColor: '#161717',
    paddingTop: 10,
    paddingRight: 7,
    paddingBottom: 10,
    paddingLeft: 7,
  },
  goBackBlock: {
    width: 88,
    flexDirection: 'row'
  },
  leftArrow: {
    fontFamily: 'cloud',
    fontSize: 20,
    color: '#FFF',
    lineHeight: 20
  },
  fontSize16: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20
  },
  fontSize20: {
    fontSize: 16,
    color: '#46be8a',
    textAlign: 'right',
    lineHeight: 20
  },
  singleBlock: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 7,
    paddingLeft: 7
  },
  title: {
    flex: 1,
    color: '#000',
    fontSize: 16
  },
  rightArrow: {
    fontFamily: 'cloud',
    fontSize: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5
  }
});
