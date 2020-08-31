import * as types from "../Actions/ActionTypes";
import { InitialState } from "./InitialState";

let lastID = 0;

const postReducer = (state = InitialState.posts, action) => {
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
      const posts = [...state];
      const index = posts.findIndex((obj) => obj.id === action.id);

      const updatedObj = {
        ...posts[index],
        title: action.post.title,
        category: action.post.category,
        description: action.post.description,
      };

      const updatedPosts = [
        ...posts.slice(0, index),
        updatedObj,
        ...posts.slice(index + 1),
      ];
      return updatedPosts;

    default:
      return state;
  }
};

export default postReducer;
