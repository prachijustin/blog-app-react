import * as types from "../Actions/ActionTypes";

export const createPost = (post) => {
  return {
    type: types.CREATE_POST,
    post,
  };
};

export const removePost = (id) => {
  return {
    type: types.REMOVE_POST,
    id,
  };
};

export const getAllPosts = () => {
  return {
    type: types.ALL_POSTS,
  };
};

export const giveClap = (id) => {
  return {
    type: types.CLAP,
    id,
  };
};

export const editPost = (id, post) => {
  return {
    type: types.EDIT_POST,
    id,
    post,
  };
};
