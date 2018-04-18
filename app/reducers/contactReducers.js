/**
 * Created by USER on 18/4/3.
 */
import {AsyncStorage} from 'react-native';
import {
  GET_CONTACTLIST,
  ADD_CONTACTLIST,
  ADD_SINGLECONTACTLIST,
  GET_SINGLECONTACTLIST,
} from '../reduxActions/contactAction';
import ImgList from '../img/img';
import store from './store';

const initialState = {
  contactData: [
    {
      name: '一包烟',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '清明节回家吗', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '回哦',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '宋沙沙',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '吃饭了嘛', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '在楼下吃了',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '刘德华',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '请你拍电影', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '没问题',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '徐柯啊',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '吃蛋糕哦', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '来了',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '刘亦菲',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '帅哥', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '你好，美女',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '傅总啊',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '给你发币', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: 'qwertyuiop 我的地址',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '齐兴邦',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '图我改了', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '智障',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '刘超越',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '我想吃屎', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '去吧，兄弟',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '李海叶',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '你好帅', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '我知道',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '逻辑啊',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '来玩游戏哦', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '不来，戒游戏',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '廖燕辉',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '我比你矮', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '小矮子',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '李帆啊',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '来打牌哦', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '在玩游戏哦哦',
        messageTime: '上午 9:40'
      }]
    },
    {
      name: '老司机',
      avatar: ImgList.img.favicon,
      message: [{who: 'other', name: '另一个人', message: '该需求', messageTime: '上午 9:40'}, {
        who: 'me',
        name: 'baobao',
        message: '你考虑了就好',
        messageTime: '上午 9:40'
      }]
    }
  ],
  singleContactData: {index: null, data: {}}
};

export function getRequestContactList(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTLIST:
      if (action.data) {
        return Object.assign({}, state, {contactData: action.data});
      } else {
        return state;
      }
    case ADD_CONTACTLIST:
      return Object.assign({}, state, {contactData: action.data});
    case GET_SINGLECONTACTLIST:
      console.log(store.getState(), '数不尽的车站');
      return Object.assign({}, state, {singleContactData: action.data});
    case ADD_SINGLECONTACTLIST:
      // console.log( action.data,'ssddfdfdfdfdf')
      // return Object.assign({}, state, {singleContactData: action.data});
      return Object.assign({}, state, {
        singleContactData: {index: action.index, data: action.data}
      });
    default:
      return state;
  }
}