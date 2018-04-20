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
import {changeInformation} from '../../reduxActions/personalInformationAction';

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: this.props.getPersonalInformation.information.sex === '男' ? 'man' : 'woman'
    };
  }

  goBack() {
    Actions.pop();
  }

  complete(information) {
    const informationData = information;
    informationData.sex = this.state.gender === 'man' ? '男' : '女';
    this.props.dispatch(changeInformation(informationData));
    Actions.pop();
  }
  chooseGender(gender) {
    this.setState({
      gender
    });
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
            <Text style={[styles.fontSize16]}>取消</Text>
          </TouchableOpacity>
          <Text style={[styles.fontSize16, {flex: 1}]}>设置性别</Text>
          <TouchableOpacity
            onPress={() => this.complete(information)}
          >
            <Text style={[styles.fontSize20, {width: 88}]}>完成</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputBlock}>
          <TouchableOpacity
            onPress={() => this.chooseGender('man')}
          >
            <View style={styles.oneInformationBlock}>
              <Text style={styles.oneInformationValue}>男</Text>
              {
                this.state.gender === 'man' ? <Text style={[styles.rightArrow]}>&#xe65e;</Text> : false
              }
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.chooseGender('woman')}
          >
            <View style={styles.oneInformationLastBlock}>
              <Text style={styles.oneInformationValue}>女</Text>
              {
                this.state.gender === 'woman' ? <Text style={styles.rightArrow}>&#xe65e;</Text> : false
              }
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
export default connect(select)(Gender);

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
  fontSize20: {
    fontSize: 16,
    color: '#46be8a',
    textAlign: 'right',
    lineHeight: 20
  },
  inputBlock: {
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    paddingLeft: 10,
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
  oneInformationValue: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  rightArrow: {
    fontFamily: 'cloud',
    fontSize: 16,
    lineHeight: 26,
    color: '#01a8fe'
  }
});
