import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";

const PostDetails = (props) => {
  useEffect(() => {}, []);

  const [post, setPost] = useState({});

  return (
    <div className="container">
      <h2>Title: {props.post.title}</h2>
      <h2>Category: {props.post.category}</h2>
      <h2>Description: {props.post.description}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id);
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

export default connect(mapStateToProps)(PostDetails);
