/**
 * Created by USER on 18/4/12.
 */
/**
 * Created by USER on 18/3/19.
 */

export const CHANGE_AVATAR = 'CHANGE_AVATAR'; // 修改个人头像
export const CHANGE_NAME = 'CHANGE_NAME'; // 修改个人名字
export const GET_INFORMATION = 'GET_INFORMATION'; // 获取个人信息
// export const COMPELTE_TODOLIST = 'COMPELTE_TODOLIST'; // 完成todolist
// export const DELETE_TODOLIST = 'DELETE_TODOLIST'; // 删除todolist


export function changeInformation(data) { // 改变信息
  return {
    type: CHANGE_AVATAR,
    data
  };
}

export function changeName(data) { // 改变名字
  return {
    type: CHANGE_NAME,
    data
  };
}

export function getInformation() { // 获取信息
  return {
    type: GET_INFORMATION,
  };
}

// export function deleteToDoList(data) { // 删除todolist
//   return {
//     type: DELETE_TODOLIST,
//     data
//   };
// }
