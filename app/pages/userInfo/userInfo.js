/**
 * Created by USER on 18/3/9.
 */
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

class UserInfos extends Component {
  setting() {
    Actions.setting();
  }
  aboutMe() {
    Actions.aboutMe();
  }
  render() {
    const {information} = this.props.getPersonalInformation;
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.avatarHeader}>
            <TouchableOpacity
              style={styles.goBackBlock}
            >
              <Text />
            </TouchableOpacity>
            <Text style={[styles.fontSize16, {flex: 1}]}>我</Text>
            <TouchableOpacity
              onPress={() => this.photo()}
            >
              <Text style={[styles.fontSize20, {width: 88}]} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.topUserInfo}
            onPress={() => this.aboutMe()}
          >
            <View
              style={styles.personalInformation}
            >
              <Image
                style={styles.img}
                source={information.avatar}
              />
              <View style={[styles.userName]}>
                <Text numberOfLines={1} style={{fontSize: 20}}>{information.name}</Text>
                <Text style={{color: '#ccc'}}>微信号: bao-love-sha</Text>
              </View>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.settingBlock}>
              <Text style={[styles.settingIcon, {color: '#4b3e99'}]}>&#xe65b;</Text>
              <Text style={styles.settingText}>钱包</Text>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.settingBlock}>
              <Text style={[styles.settingIcon, {color: '#ecf134'}]}>&#xe658;</Text>
              <Text style={styles.settingText}>收藏</Text>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.settingNoBraceBlock}>
              <Text style={[styles.settingIcon, {color: '#f13466'}]}>&#xe64f;</Text>
              <Text style={styles.settingText}>相册</Text>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.settingNoBraceBlock}>
              <Text style={[styles.settingIcon, {color: '#20fc34'}]}>&#xe660;</Text>
              <Text style={styles.settingText}>卡包</Text>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.settingNoBraceBlock}>
              <Text style={[styles.settingIcon, {color: '#0275d8'}]}>&#xe666;</Text>
              <Text style={styles.settingText}>表情</Text>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setting()}
          >
            <View style={styles.settingBlock}>
              <Text style={[styles.settingIcon, {color: '#de0af3'}]}>&#xe664;</Text>
              <Text style={styles.settingText}>设置</Text>
              <Text style={styles.settingGo}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

function select(state) {
  return {
    getPersonalInformation: state.getPersonalInformation
  };
}
export default connect(select)(UserInfos);

// <View style={styles.hashInformation}>
// <TouchableOpacity
//   style={styles.upDownText}
//   activeOpacity={0.6}
// >
//   <Text style={styles.upTextStyle}>N/A</Text>
//   <Text>我的算力</Text>
// </TouchableOpacity>
// <TouchableOpacity
// style={styles.upDownText}
// activeOpacity={0.6}
//   >
//   <Text style={styles.upTextStyle}>N/A</Text>
//   <Text>转入</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={styles.upDownText}
//     activeOpacity={0.6}
//   >
//     <Text style={styles.upTextStyle}>N/A</Text>
//     <Text>转出</Text>
//   </TouchableOpacity>
//   </View>
//   <View style={styles.renveuseInformation}>
//     <TouchableOpacity
//       style={styles.upDownText}
//       activeOpacity={0.6}
//     >
//       <Icon
//         name="book"
//         size={24}
//         style={styles.upTextStyle}
//       />
//       <Text>订单</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.upDownText}
//       activeOpacity={0.6}
//     >
//       <Icon
//         name="book"
//         size={24}
//         style={styles.upTextStyle}
//       />
//       <Text>总收益</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.upDownText}
//       activeOpacity={0.6}
//     >
//       <Icon
//         name="book"
//         size={24}
//         style={styles.upTextStyle}
//       />
//       <Text>收币记录</Text>
//     </TouchableOpacity>
//   </View>
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    flex: 1
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
  personalInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingRight: 7,
    paddingBottom: 10,
    paddingLeft: 7,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  topUserInfo: {
    backgroundColor: '#fff',
    marginTop: 10
    // paddingTop: 30,
    // paddingBottom: 20,
    // marginBottom: 10
  },
  userName: {
    flex: 1,
    justifyContent: 'center'
  },
  banlance: {
    flexDirection: 'row',
  },
  userBalance: {
    marginLeft: 100,
    marginTop: 20
  },
  hashInformation: {
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  renveuseInformation: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginTop: 10
  },
  upDownText: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1
  },
  upTextStyle: {
    fontSize: 24,
    color: '#4d4d4d'
  },
  operationInformation: {
    flex: 1
  },
  settingBlock: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FFF',
    paddingTop: 3,
    paddingRight: 7,
    paddingBottom: 3,
    paddingLeft: 7,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  settingNoBraceBlock: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingTop: 3,
    paddingRight: 7,
    paddingBottom: 3,
    paddingLeft: 7,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  settingIcon: {
    fontFamily: 'cloud',
    fontSize: 30,
    lineHeight: 40,
  },
  settingText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 40,
    color: '#000'
  },
  settingGo: {
    fontFamily: 'cloud',
    fontSize: 30,
    lineHeight: 40
  }
});
