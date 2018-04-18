/**
 * Created by USER on 18/4/2.
 */
// /**
//  * Created by USER on 18/3/9.
//  */
import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  AsyncStorage,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import store from '../../reducers/store';
import Single from '../../components/single_contact';
import {getContactList} from '../../reduxActions/contactAction';

class Contact extends Component {
  componentWillMount() {
    AsyncStorage.getItem('messageData').then((res) => {
      if (res) {
        store.dispatch(getContactList(JSON.parse(res)));
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    // store.dispatch(getContactList())
  }

  render() {
    const getRequestContactList = this.props.getRequestContactList.contactData.concat();
    return (
      <View style={styles.container}>
        <View style={styles.avatarHeader}>
          <TouchableOpacity
            style={styles.goBackBlock}
          >
            <Text />
          </TouchableOpacity>
          <Text style={[styles.fontSize16, {flex: 1}]}>消息(10)</Text>
          <TouchableOpacity>
            <Text style={[styles.fontSize20, {width: 88, fontFamily: 'cloud'}]} size={16}>&#xe667;</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.searchInputContainer}>
            <View style={styles.searchInputBlock}>
              <TextInput placeholder="搜索" underlineColorAndroid="transparent" />
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false} // 是否显示垂直滚动条
            data={getRequestContactList}
            style={styles.flatListStyle}
            renderItem={({ item, index }) => (
              <Single todo={item} index={index} />
          )}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
//
function select(state) {
  return {
    getRequestContactList: state.getRequestContactList,
  };
}
export default connect(select)(Contact);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative'
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
    color: '#FFF',
    textAlign: 'right',
    lineHeight: 20
  },
  searchInputContainer: {
    backgroundColor: '#ddd',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchInputBlock: {
    backgroundColor: '#FFF',
    borderRadius: 5,
  },

  searchInput: {},
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
    fontSize: 20,
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
