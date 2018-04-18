/**
 * Created by USER on 18/4/3.
 */
export const GET_CONTACTLIST = 'GET_CONTACTLIST'; // 获取todolist
export const ADD_CONTACTLIST = 'ADD_CONTACTLIST'; // 添加todolist
export const ADD_SINGLECONTACTLIST = 'ADD_SINGLECONTACTLIST'; // 添加单个聊天信息
export const GET_SINGLECONTACTLIST = 'GET_SINGLECONTACTLIST'; // 获取单个聊天信息

export function getContactList(data) { // 获取消息
  return {
    type: GET_CONTACTLIST,
    data
  };
}

export function addContactList(data) { // 添加消息
  return {
    type: ADD_CONTACTLIST,
    data
  };
}

export function addSingleContactList(data, index) { // 获取单个聊天信息
  return {
    type: ADD_SINGLECONTACTLIST,
    data,
    index
  };
}

export function getSingleContactList(data) { // 获取单个聊天信息
  return {
    type: GET_SINGLECONTACTLIST,
    data
  };
}
