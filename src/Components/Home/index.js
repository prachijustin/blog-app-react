import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3">
        {props.posts.map((post) => (
          <div className="col mb-4" key={post.id}>
            <div className="card h-100">
              <div className="card-body">
                <Link to={`/post/${post.id}`}>
                  <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text">{post.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {post.postedOn.toString().slice(4, 15)}
                </small>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, null)(Home);
