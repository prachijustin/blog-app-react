import React, { useState } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";
import PropTypes from "prop-types";

const CreatePost = (props) => {
  const initState = {
    title: "",
    description: "",
  };

  const [post, setPost] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    props.createPost(post);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Posts</h2>
        <h3>Add Post</h3>
        <input
          type="text"
          value={post.title}
          className="form-control"
          placeholder="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <br />
        <textarea
          type="text"
          value={post.description}
          className="form-control"
          placeholder="description"
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        />
        <br />
        <button className="btn btn-success">Submit</button>
      </form>
      {props.posts.map((p) => (
        <li key={p.id}>
          {p.title} --- {p.description}
        </li>
      ))}
    </div>
  );
};

CreatePost.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  console.log("posts:", state.posts);
  return {
    posts: state.posts,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) => dispatch(postActions.createPost(post)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
