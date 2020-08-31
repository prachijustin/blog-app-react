import React from "react";
import { Link } from "react-router-dom";
import { PostConsumer } from "../PostContext";

const Post = () => {
  return (
    <PostConsumer>
      {(post) => {
        return (
          <div>
            <div className="col mb-4" key={post.id}>
              <div className="card h-100">
                <div className="card-body">
                  <Link to={`/post/${post.id}`}>
                    <h5 className="card-title">{post.title}</h5>
                  </Link>
                  <p className="card-text">{post.category}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Posted On: {post.postedOn.toString().slice(4, 15)}
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </PostConsumer>
  );
};

export default Post;
