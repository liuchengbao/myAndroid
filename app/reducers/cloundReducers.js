/**
 * Created by USER on 18/3/19.
 */
import { combineReducers } from 'redux';
import { getRequestToDoList } from './toDoListReducers';
import { getRequestContactList } from './contactReducers';
import { getPersonalInformation } from './personalInformationReducer';

const reducerList = combineReducers({
  getRequestToDoList,
  getRequestContactList,
  getPersonalInformation
});

export default reducerList;
