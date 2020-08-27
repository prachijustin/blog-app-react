import * as types from "../Actions/ActionTypes";
import { InitialState } from "./InitialState";

let lastID = 0;

const postReducer = (state = InitialState.posts, action) => {
  console.log("action", action);
  switch (action.type) {
    case types.CREATE_POST:
      return [
        ...state,
        {
          id: ++lastID,
          title: action.post.title,
          category: action.post.category,
          description: action.post.description,
          postedOn: new Date(),
        },
      ];
    case types.REMOVE_POST:
      return state.filter((post) => post.id !== action.payload.id);
    case types.ALL_POSTS:
      return state;
    default:
      return state;
  }
};

export default postReducer;
