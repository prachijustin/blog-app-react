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
          description: action.post.description,
          postedOn: new Date(),
        },
      ];
    default:
      return state;
  }
};

export default postReducer;
