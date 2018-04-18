/**
 * Created by USER on 18/4/12.
 */
import {
  CHANGE_AVATAR,
  GET_INFORMATION,
  CHANGE_NAME
} from '../reduxActions/personalInformationAction';
import ImgList from '../img/img';

const initialState = {
  information: {
    avatar: ImgList.img.avatar,
    name: '。。。。',
    PName: 'bao-love-sha',
    place: '江西 宜春'
  }
};

export function getPersonalInformation(state = initialState, action) {
  switch (action.type) {
    case GET_INFORMATION:
      return state;
    case CHANGE_AVATAR:
      return Object.assign({}, state, {information: action.data});
    case CHANGE_NAME:
      return Object.assign({}, state, {information: action.data});
    default:
      return state;
  }
}
