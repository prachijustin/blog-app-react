import React from "react";
import { connect } from "react-redux";
import { PostProvider } from "../../Components/PostContext";
import Posts from "../../Components/Posts";

const Home = (props) => {
  return (
    <div className="container">
      <h3>All Posts here</h3>
      <div className="row row-cols-1 row-cols-md-3">
        {props.posts.map((post) => (
          <PostProvider value={post}>
            <Posts />
          </PostProvider>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
