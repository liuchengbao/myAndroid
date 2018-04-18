/**
 * Created by USER on 18/3/19.
 */

export const GET_TODOLIST = 'GET_TODOLIST'; // 获取todolist
export const ADD_TODOLIST = 'ADD_TODOLIST'; // 添加todolist
export const COMPELTE_TODOLIST = 'COMPELTE_TODOLIST'; // 完成todolist
export const DELETE_TODOLIST = 'DELETE_TODOLIST'; // 删除todolist

export function getToDoList(data) { // 获取todolist
  return {
    type: GET_TODOLIST,
    data
  };
}

export function addToDoList(data) { // 获取todolist
  return {
    type: ADD_TODOLIST,
    data
  };
}

export function compelteToDoList(data) { // 完成todolist
  return {
    type: COMPELTE_TODOLIST,
    data
  };
}

export function deleteToDoList(data) { // 删除todolist
  return {
    type: DELETE_TODOLIST,
    data
  };
}
