/**
 * Created by USER on 18/4/18.
 */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import {Actions} from 'react-native-router-flux';

class MoreInformation extends Component {
  goBack() {
    Actions.pop();
  }

  goGender() {
    Actions.gender();
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
            <Text style={[styles.fontSize16]}>个人信息</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputBlock}>
          <TouchableOpacity
            onPress={() => this.goGender()}
          >
            <View style={styles.oneInformationBlock}>
              <Text style={styles.oneInformationHeader}>性别</Text>
              <Text style={styles.oneInformationValue}>{information.sex}</Text>
              <Text style={styles.rightArrow}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.oneInformationBlock}>
              <Text style={styles.oneInformationHeader}>地区</Text>
              <Text style={styles.oneInformationValue}>{information.place}</Text>
              <Text style={styles.rightArrow}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.oneInformationLastBlock}>
              <Text style={styles.oneInformationHeader}>签名</Text>
              <Text style={styles.oneInformationValue}>{information.signature}</Text>
              <Text style={styles.rightArrow}>&#xe64d;</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function select(state) {
  return {
    getPersonalInformation: state.getPersonalInformation
  };
}
export default connect(select)(MoreInformation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
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
  inputBlock: {
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 7,
    paddingLeft: 7,
  },
  oneInformationBlock: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    paddingTop: 5,
    paddingBottom: 5
  },
  oneInformationLastBlock: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5
  },
  oneInformationHeader: {
    color: '#000',
    fontSize: 16
  },
  oneInformationValue: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
    marginRight: 5
  },
  rightArrow: {
    fontFamily: 'cloud',
    fontSize: 16,
    lineHeight: 26
  }
});
