/**
 * Created by USER on 18/4/2.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  RefreshControl
} from 'react-native';
import {connect} from 'react-redux';
import SingleMessage from '../components/single_message';
import store from '../reducers/store';
import {addContactList} from '../reduxActions/contactAction';

class SingleContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: null,
      refreshing: false
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  inputChange(text) {
    this.setState({
      inputMessage: text
    });
  }

  sendMessage() {
    if (this.state.inputMessage) {
      const messageData = this.props.getRequestContactList.contactData;
      const messageIndex = this.props.getRequestContactList.singleContactData.index;
      const myDate = new Date();
      const h = myDate.getHours(); // 获取当前小时数(0-23)
      let m = myDate.getMinutes(); // 获取当前分钟数(0-59)
      m = m < 10 ? `0${m}` : m;
      messageData[messageIndex].message.push({
        who: 'me',
        name: 'baobao',
        message: this.state.inputMessage,
        messageTime: h > 12 ? `下午 ${h - 12}:${m} ` : `上午 ${h}:${m}`
      });
      store.dispatch(addContactList(messageData));
      this.setState({
        inputMessage: null
      });
      this.flatList.scrollToIndex({
        viewPosition: 0.5, index: messageData[messageIndex].message.length - 2
      });
      setTimeout(() => {
        messageData[messageIndex].message.push({
          who: 'other',
          name: '另一个人',
          message: '好的哦',
          messageTime: h > 12 ? `下午 ${h - 12}:${m} ` : `上午 ${h}:${m}`
        });
        store.dispatch(addContactList(messageData));
        AsyncStorage.setItem('messageData', JSON.stringify(messageData));
        this.flatList.scrollToIndex({
          viewPosition: 0.5, index: messageData[messageIndex].message.length - 1
        });
      }, 3000);
    }
  }

  loreMore() {
    console.log('gangbadei');
  }

  refresh() {
    console.log('liluogancui');
  }

  render() {
    const getRequestContactList = this.props.getRequestContactList.singleContactData;
    const getRequestContactListMessage = getRequestContactList.data.message.concat();
    const getPersonalInformation = this.props.getPersonalInformation.information;
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false} // 是否显示垂直滚动条
          data={getRequestContactListMessage}
          style={styles.messageFlatList}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.loreMore()}
          ref={(flatList) => { this.flatList = flatList; }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refresh()}
              title="Loading..."
            />
          }
          getItemLayout={(data, index) => (
          {length: 120, offset: 120 * index, index}
          )}
          renderItem={({ item, index }) => (
            <SingleMessage
              list={item}
              index={index}
              avatar={getRequestContactList.data.avatar}
              avatarMyself={getPersonalInformation.avatar}
            />
          )}
        />
        <View style={styles.messageInputBlock}>
          <View style={styles.messageInput}>
            <TextInput underlineColorAndroid="transparent" onChangeText={text => this.inputChange(text)} value={this.state.inputMessage} />
          </View>
          <TouchableOpacity>
            <Text style={styles.sendButton} onPress={() => this.sendMessage()}>发送</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function select(state) {
  return {
    getRequestContactList: state.getRequestContactList,
    getPersonalInformation: state.getPersonalInformation
  };
}
export default connect(select)(SingleContact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 50,
  },
  messageFlatList: {
  },
  singleMessageBlock: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  avatar: {
    width: 50,
    height: 50,
    paddingRight: 10,
  },
  messageView: {
    flex: 1,
    flexDirection: 'row',
  },
  messageText: {
    height: 50,
    lineHeight: 50,
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  blank: {
    width: 50,
    height: 50,
  },
  messageInputBlock: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 7,
    paddingBottom: 7,
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: '#4f5051'
  },
  sendButton: {
    width: 60,
    height: 40,
    lineHeight: 40,
    color: '#FFF',
    backgroundColor: '#01a8fe',
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 7
  }
});
