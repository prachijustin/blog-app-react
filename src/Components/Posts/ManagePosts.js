import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";

const ManagePosts = (props) => {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    props.getAllPosts();
    // setPosts(props.posts);
  }, []);

  const onHandleDelete = (id) => {
    console.log("id to delte", id);
    setId(id);
    props.removePost(id);
  };

  return (
    <div className="container">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th></th>
        </tr>
        {props.posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>
              <button
                className="btn btn-danger"
                type="submit"
                onClick={() => onHandleDelete(post.id)}
              >
                Delete
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
    getAllPosts: () => dispatch(postActions.getAllPosts()),
    removePost: (id) => dispatch(postActions.removePost(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePosts);
