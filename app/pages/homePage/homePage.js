// /**
//  * Created by USER on 18/3/9.
//  */
import React, {Component} from 'react';
import {View, FlatList, Button, StyleSheet, Dimensions, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import ListItem from '../../components/listItem';
import store from '../../reducers/store';
import {getToDoList} from '../../reduxActions/listToDoListAction';

const {width} = Dimensions.get('window');
class Home extends Component {
  componentWillMount() {
    AsyncStorage.getItem('listTodo').then((data) => {
      store.dispatch(getToDoList(JSON.parse(data)));
    }).catch();
    const initialState = {
      toDoListData: []
    };

    store.dispatch(getToDoList(initialState.toDoListData));
  }

  componentDidMount() {
    this.fetchData();
    AsyncStorage.getItem('listTodo').then((data) => {
      store.dispatch(getToDoList(JSON.parse(data)));
    }).catch();
  }

  goToAddList() {
    Actions.announcement1();
  }

  fetchData = async () => {
    const result = await AsyncStorage.getItem('listTodo');
    await store.dispatch(getToDoList(JSON.parse(result)));
  };

  render() {
    const getRequestToDoList = this.props.getRequestToDoList.toDoListData.concat();
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <FlatList
            data={getRequestToDoList}
            renderItem={({ item, index }) => (
              <ListItem todo={item} index={index} />
            )}
          />
        </View>
        <View style={styles.container}>
          <Button
            style={styles.addButton}
            onPress={() => this.goToAddList()}
            title="添加事项"
            color="#841584"
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

function select(state) {
  return {
    getRequestToDoList: state.getRequestToDoList
  };
}
export default connect(select)(Home);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingBottom: 30,
  },
  hhhh: {
    flexDirection: 'row',
    marginBottom: 5
  },
  addButton: {
    width: width * 0.6
  },
  matterColor: {
    width: 5, height: 50, backgroundColor: '#841584'
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
