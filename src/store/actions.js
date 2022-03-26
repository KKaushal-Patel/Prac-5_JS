import {
  FETCH_USER_SUCCESS,
  MOUSER_HOVER,
  ON_MOUSE_LEAVE,
  REMOVE_USER,
  IS_USER_ACTIVE,
} from "./actionTypes";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("https://reqres.in/api/users?page=1");
      let data = await res.json();
      dispatch(fetchUserSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const mouseHover = (id) => {
  return {
    type: MOUSER_HOVER,
    payload: id,
  };
};
const mouseLeave = (id) => {
  return {
    type: ON_MOUSE_LEAVE,
    payload: id,
  };
};

const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};
const isActive = (id) => {
  return {
    type: IS_USER_ACTIVE,
    payload: id,
  };
};

export { mouseHover,mouseLeave, removeUser, fetchUserSuccess, isActive };

