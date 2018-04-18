/**
 * Created by USER on 18/4/3.
 */
/**
 * Created by USER on 18/4/2.
 */
// /**
//  * Created by USER on 18/3/9.
//  */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {addSingleContactList} from '../reduxActions/contactAction';
import store from '../reducers/store';

export default class SingleContact extends Component {
  componentWillMount() {

  }

  componentDidMount() {

  }

  chatBox(todos, index) {
    store.dispatch(addSingleContactList(todos, index));
    Actions.chatBox();
  }

  render() {
    const data = this.props;
    return (
      <TouchableOpacity onPress={() => this.chatBox(data.todo, data.index)}>
        <View style={styles.singlePersonBlock}>
          <Image style={styles.singlePersonImg} source={data.todo.avatar} />
          <View style={styles.singlePersonRight}>
            <Text style={styles.singlePersonRightName}>{data.todo.name}</Text>
            <Text
              style={styles.singlePersonRightMessage}
            >
              {data.todo.message[data.todo.message.length - 1].message.length > 10 ?
                `${data.todo.message[data.todo.message.length - 1].message.slice(0, 9)}...` :
                data.todo.message[data.todo.message.length - 1].message}
            </Text>
          </View>
          <View>
            <Text style={styles.singlePersonTimeText}>
              {data.todo.message[data.todo.message.length - 1].messageTime}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  singlePersonBlock: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  singlePersonImg: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  singlePersonRight: {
    flex: 1,
  },
  singlePersonRightName: {
    fontSize: 18,
    color: '#424344'
  },
  singlePersonRightMessage: {
    marginTop: 3,
    fontSize: 14,
    color: '#92989a'
  },
  singlePersonTimeText: {
    paddingTop: 2,
    fontSize: 14,
    color: '#92989a'
  }
});
