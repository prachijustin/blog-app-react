import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PostDetails = (props) => {
  useEffect(() => {}, []);

  const [post, setPost] = useState({});

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h2>Title: {props.post.title}</h2>
      <h2>Category: {props.post.category}</h2>
      <h2>Description: {props.post.description}</h2>
      <hr />
      <Link to="/">Back To Index</Link>
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
