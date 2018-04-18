/**
 * Created by USER on 18/4/13.
 */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';

import {Actions} from 'react-native-router-flux';
import {changeName} from '../../reduxActions/personalInformationAction';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.getPersonalInformation.information.name,
      disable: true,
      opacity: 0.5
    };
  }

  goBack() {
    Actions.pop();
  }

  complete(information) {
    const informationdata = information;
    informationdata.name = this.state.inputValue;
    this.props.dispatch(changeName(informationdata));
    Actions.pop();
  }

  inputChange(text) {
    this.setState({
      inputValue: text,
      disable: false,
      opacity: 1
    });
  }

  render() {
    console.log(this.props, '怎么会爱上了他，并决定跟他回家');
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
          <Text style={[styles.fontSize16, {flex: 1}]}>设置名字</Text>
          <TouchableOpacity
            disabled={this.state.disable}
            onPress={() => this.complete(information)}
          >
            <Text style={[styles.fontSize20, {width: 88, opacity: this.state.opacity}]}>完成</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputBlock}>
          <TextInput
            value={this.state.inputValue}
            onChangeText={text => this.inputChange(text)}
            underlineColorAndroid="transparent"
          />
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
export default connect(select)(Name);

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
    paddingRight: 5,
    paddingLeft: 5,
  }
});
