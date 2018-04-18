/**
 * Created by USER on 18/3/15.
 */
import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
} from 'react-native';
import shortid from 'shortid';
import {Actions} from 'react-native-router-flux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import store from '../../reducers/store';
import {addToDoList} from '../../reduxActions/listToDoListAction';

const {width} = Dimensions.get('window');

export default class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      colorStyle: [{text: {checked: true}, view: {marginLeft: 8, backgroundColor: '#e4393c'}},
        {text: {checked: false}, view: {backgroundColor: '#b78282'}},
        {text: {checked: false}, view: {backgroundColor: '#5cb85c'}},
        {text: {checked: false}, view: {marginLeft: 8, backgroundColor: '#f0ad4e'}},
        {text: {checked: false}, view: {backgroundColor: '#01a8fe'}},
        {text: {checked: false}, view: {backgroundColor: '#827ca1'}},
        {text: {checked: false}, view: {marginLeft: 8, backgroundColor: '#99a17c'}},
        {text: {checked: false}, view: {backgroundColor: '#e475b7'}},
        {text: {checked: false}, view: {backgroundColor: '#8b1bec'}}],
      checkIndexColor: '#e4393c',
    };
  }

  addList = async () => {
    const list = {
      content: this.state.inputText, complete: false, color: this.state.checkIndexColor
    };
    const listAction = store.getState().getRequestToDoList.toDoListData;
    listAction.push(list);
    await store.dispatch(addToDoList(listAction));
    await Actions.pop();
    await AsyncStorage.setItem('listTodo', JSON.stringify(listAction));
  };

  inputChange(inputText) {
    this.setState({
      inputText
    });
  }

  checkbox(index, backgroundColor) {
    const colorStyleList = this.state.colorStyle.map((item, i) => {
      const data = item;
      if (i === index) {
        data.text.checked = true;
        return data;
      }
      data.text.checked = false;
      return data;
    });
    this.setState({
      colorStyle: colorStyleList,
      checkIndexColor: backgroundColor
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <TextInput
            onChangeText={(inputText) => {
              this.inputChange(inputText);
            }}
            value={this.state.inputText}
          />
          <View style={styles.colorBlock}>
            {
              this.state.colorStyle.map((item, index) =>
                (
                  <TouchableOpacity
                    key={shortid.generate()}
                    onPress={() => this.checkbox(index, item.view.backgroundColor)}
                  >
                    <View style={[styles.color, item.view]}>
                      <Text
                        style={[{
                          width: '100%',
                          lineHeight: 100,
                          textAlign: 'center',
                          borderStyle: 'solid',
                          borderColor: item.text.checked ? '#111111' : '#dddddd',
                          borderWidth: item.text.checked ? 2 : 0
                        }]}
                      >
                        {index}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))
            }
          </View>
          <Button
            style={styles.addButton}
            onPress={() => this.addList()}
            title="确认添加"
            color="#bbddce"
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  colorBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  color: {
    width: width * 0.3,
    height: 100,
    marginBottom: 10,
    marginRight: 8,
  }
});
