/**
 * Created by USER on 18/3/17.
 */
import {
  GET_TODOLIST,
  TODOLISTLOADED,
  ADD_TODOLIST,
  COMPELTE_TODOLIST,
  DELETE_TODOLIST
} from '../reduxActions/listToDoListAction';

const initialState = {
  toDoListData: [{content: '起床', complete: false, color: '#841584'}, {content: '刷牙', complete: false, color: '#e4393c'}]
};

export function getRequestToDoList(state = initialState, action) {
  switch (action.type) {
    case GET_TODOLIST:
      return Object.assign({}, state, {toDoListData: action.data});
    case TODOLISTLOADED:
      return Object.assign({}, state, {toDoListData: action.data});
    case ADD_TODOLIST:
      // const { data } = action;
      // let listAction = store.getState().getRequestToDoList.toDoListData;
      // listAction.push(data);
      // return Object.assign({}, state, {toDoListData: listAction});
      return Object.assign({}, state, {toDoListData: action.data});

    case COMPELTE_TODOLIST:
      return Object.assign({}, state, {toDoListData: action.data});
    case DELETE_TODOLIST:
      return Object.assign({}, state, {toDoListData: action.data});
    default:
      return state
  }
}