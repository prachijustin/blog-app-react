import * as types from "../Actions/ActionTypes";

export const createPost = (post) => {
  return {
    type: types.CREATE_POST,
    post,
  };
};
