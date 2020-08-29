import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ManagePosts = (props) => {
  const onHandleDelete = (id) => {
    console.log("id to delte", id);
    props.removePost(id);
  };

  const onHandleEdit = (post) => {
    const isEdit = true;
    // <Redirect to="/create-post" />;
    props.history.push({
      pathname: "/create-post",
      state: { isEdit, post },
    });
  };

  return (
    <div className="container">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Claps</th>
          <th>#</th>
        </tr>
        {props.posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>{post.clapCount}</td>
            <td>
              <button
                className="btn btn-danger mr-2"
                type="submit"
                onClick={() => onHandleDelete(post.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-warning"
                type="submit"
                onClick={() => onHandleEdit(post)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("posts came now:", state.posts);
  return {
    posts: state.posts,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // getAllPosts: () => dispatch(postActions.getAllPosts()),
    removePost: (id) => dispatch(postActions.removePost(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePosts);
