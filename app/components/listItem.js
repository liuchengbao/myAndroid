/**
 * Created by USER on 18/3/19.
 */
// /**
//  * Created by USER on 18/3/9.
//  */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {compelteToDoList, deleteToDoList} from '../reduxActions/listToDoListAction';
import store from '../reducers/store';

const {width} = Dimensions.get('window');

export default class ListItem extends Component {
  completeTodoList(index) {
    const listData = store.getState().getRequestToDoList.toDoListData;
    if (listData[index].complete === true) {
      listData[index].complete = false;
    } else {
      listData[index].complete = true;
    }

    AsyncStorage.setItem('listTodo', JSON.stringify(listData));
    store.dispatch(compelteToDoList(listData));
  }


  deleteTodoList(index) {
    const listData = store.getState().getRequestToDoList.toDoListData;
    const list = [];
    listData.map((item, i) => {
      if (index !== i) {
        list.push(item);
      }
      return false;
    });


    AsyncStorage.setItem('listTodo', JSON.stringify(list));
    store.dispatch(deleteToDoList(list));
  }

  // deleteTodoList = async(index) =>{
  //     const listData = store.getState().getRequestToDoList.toDoListData;
  //     const list = [];
  //     await listData.map((item,i)=>{
  //         if(index !== i){
  //             return list.push(item)
  //         }
  //     });
  //
  //     console.log(list,'删除之后的数据');
  //
  //     await store.dispatch(deleteToDoList(list));
  //     await AsyncStorage.setItem('listTodo',list,(error)=>{
  //         console.log(error,'sssssss')
  //     });
  // };

  render() {
    console.log(this.props.todo, this.props.index, 'hhhhh');
    const todos = this.props;
    return (
      <View style={styles.hhhh}>
        <View style={styles.matterContent}>
          <Text
            style={[styles.fontContent, {textDecorationLine: todos.todo.complete ? 'line-through' : 'none'}]}
          >
            {todos.todo.content}
          </Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => this.completeTodoList(todos.index)}>
              <Icon name={todos.todo.complete ? 'remove' : 'check'} size={30} color="#FFF" style={{lineHeight: 50}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.deleteTodoList(todos.index)}>
              <Icon name="trash" size={30} color="#FFF" style={{paddingLeft: 5, lineHeight: 50}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hhhh: {
    flexDirection: 'row',
    marginBottom: 5
  },
  fontContent: {
    lineHeight: 50,
    width: '80%',
    paddingLeft: 10
  },
  addButton: {
    width: width * 0.6
  },
  matterColor: {
    width: 5,
    height: 50,
  },
  matterContent: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#bbddce'
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
});
