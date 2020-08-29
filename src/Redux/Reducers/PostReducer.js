import * as types from "../Actions/ActionTypes";
import { InitialState } from "./InitialState";

let lastID = -1;

const postReducer = (state = InitialState.posts, action) => {
  console.log("action", action);
  switch (action.type) {
    case types.CREATE_POST:
      return [
        ...state,
        {
          id: ++lastID,
          ...action.post,
          postedOn: new Date(),
        },
      ];
    case types.REMOVE_POST:
      return state.filter((post) => post.id !== action.id);
    case types.ALL_POSTS:
      return state;
    case types.CLAP:
      return state.map((item, index) => {
        if (item.id === action.id) {
          return {
            ...item,
            clapCount: item.clapCount + 1,
          };
        }
        return item;
      });
    case types.EDIT_POST:
      return state.map((item, index) => {
        if (item.id === action.id) {
          return {
            ...item,
            title: action.post.title,
            category: action.post.category,
            description: action.post.description,
          };
        }
        return item;
      });

    default:
      return state;
  }
};

export default postReducer;
