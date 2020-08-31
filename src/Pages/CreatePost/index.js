import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";
import PropTypes from "prop-types";
import "./style.css";

const CreatePost = (props) => {
  const initState = {
    title: "",
    category: "",
    description: "",
    clapCount: 0,
  };

  const categoryOptions = [
    { value: "1", name: "Technologies" },
    { value: "2", name: "Hardware" },
    { value: "3", name: "Software" },
    { value: "4", name: "Gaming" },
    { value: "5", name: "Gadgets" },
  ];

  const [post, setPost] = useState(initState);
  const [label, setLabel] = useState("ADD");

  useEffect(() => {
    if (props.location.state) {
      const isEdit = props.location.state.isEdit;
      const postCame = props.location.state.post;

      if (isEdit === true) {
        setLabel("EDIT");
        setPost(postCame);
      }
    }
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "none";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (label === "ADD") {
      props.createPost(post);
      document.getElementById("add").style.display = "block";
      setPost(initState);
    } else {
      props.editPost(post.id, post);
      document.getElementById("edit").style.display = "block";
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setPost(initState);
  };
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-md-6">
          <div className="card createCard">
            <div className="card-body">
              <div class="alert alert-success" role="alert" id="add">
                Post added successfully!
              </div>
              <div class="alert alert-success" role="alert" id="edit">
                Post edited successfully!
              </div>
              <form>
                <h3>{label} POST</h3>
                <input
                  type="text"
                  value={post.title}
                  className="form-control"
                  placeholder="Title"
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <br />
                <select
                  value={post.category}
                  onChange={(e) =>
                    setPost({ ...post, category: e.target.value })
                  }
                  className="form-control"
                >
                  <option value="" disabled selected>
                    --Select a Category--
                  </option>
                  {categoryOptions.map((e, key) => {
                    return (
                      <option key={key} value={e.name}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                <br />
                <textarea
                  type="text"
                  value={post.description}
                  className="form-control"
                  placeholder="Description"
                  rows="10"
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

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) => dispatch(postActions.createPost(post)),
    editPost: (id, post) => dispatch(postActions.editPost(id, post)),
  };
}

export default connect(null, mapDispatchToProps)(CreatePost);
