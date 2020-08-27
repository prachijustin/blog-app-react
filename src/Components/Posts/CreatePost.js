import React, { useState } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";
import PropTypes from "prop-types";

const CreatePost = (props) => {
  const initState = {
    title: "",
    category: "",
    description: "",
  };

  const [post, setPost] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    props.createPost(post);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setPost(initState);
  };

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-md-6">
          <div className="card createCard">
            <div className="card-body">
              <form>
                <h3>Add Post</h3>
                <input
                  type="text"
                  value={post.title}
                  className="form-control"
                  placeholder="title"
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <br />

                <select
                  className="form-control"
                  value={post.category}
                  onChange={(e) =>
                    setPost({ ...post, category: e.target.value })
                  }
                >
                  <option disabled value="select">
                    --SELECT A CATEGORY--
                  </option>
                  <option value="Gadgets">Gadgets</option>
                  <option value="Technologies">Technologies</option>
                  <option value="Sofware">Sofware</option>
                  <option value="Hardware">Hardware</option>
                </select>
                <br />
                <textarea
                  type="text"
                  value={post.description}
                  className="form-control"
                  placeholder="description"
                  onChange={(e) =>
                    setPost({ ...post, description: e.target.value })
                  }
                />
                <br />
                <button
                  className="btn btn-secondary"
                  style={{ float: "right" }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary mr-2"
                  style={{ float: "right" }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
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
