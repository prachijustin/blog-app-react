import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";
import { Link } from "react-router-dom";

const PostDetails = (props) => {
  // const [post, setPost] = useState({})

  const onHandleClap = () => {
    // setPost(props.post)
    props.giveClap(props.post.id);
  };
  if (!props.post) {
    return <div>No post found</div>;
  }
  return (
    <div className="container">
      <h2>Title: {props.post.title}</h2>
      <h2>Category: {props.post.category}</h2>
      <h2>Description: {props.post.description}</h2>
      claps: {props.post.clapCount}
      <hr />
      <button onClick={onHandleClap}>Clap</button>
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

function mapDispatchToProps(dispatch) {
  return {
    giveClap: (id) => dispatch(postActions.giveClap(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
