import { act } from "react-dom/test-utils";
import {
  FETCH_USER_SUCCESS,
  MOUSER_HOVER,
  ON_MOUSE_LEAVE,
  REMOVE_USER,
  IS_USER_ACTIVE,
} from "./actionTypes";

const initialUsersState = {
  selectedId: null,
  isActive: false,
  users: [],
};

const reducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        users: action.payload,
      };

    case MOUSER_HOVER:
      return {
        ...state,
        selectedId: action.payload,
      };

    case ON_MOUSE_LEAVE:
      return {
        ...state,
        selectedId: null,
      };
    case IS_USER_ACTIVE:
      // console.log(action.payload);
      let active_user = state.users.find((user) => user.id === action.payload);
    active_user.isActive = !(active_user.isActive);
    console.log(active_user);
      return {
        ...state,
        isActive: active_user.isActive,
        selectedId: active_user.id
      };

    case REMOVE_USER:
      let newId = state.selectedId;
      if (newId) {
        if (newId === action.payload) {
          newId = null;
        }
      }
      let filterUsers = [
        ...state.users.filter((data) => {
          return data.id !== action.payload;
        }),
      ];

      return {
        ...state,
        users: filterUsers,
        selectedId: newId,
      };

    default:
      return state;
  }
};
export default reducer;

/*  
{
      id: 0,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      isOwner: true,
      isActive: true,
      clicksReviewed: "3,450",
      monthlyClicks: "9800",
    },
    {
      id: 1,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "1,450",
      monthlyClicks: "1000",
    },
    {
      id: 2,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "5400",
    },
    {
      id: 3,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "2300",
    },
    {
      id: 4,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "3,450",
      monthlyClicks: "3000",
    },
    {
      id: 5,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
    {
      id: 6,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
    {
      id: 7,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
    {
      id: 8,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "4308",
    },
    {
      id: 9,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "3,333",
      monthlyClicks: "1000",
    },

*/
