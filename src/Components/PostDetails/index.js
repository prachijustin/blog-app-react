import React from "react";
import { connect } from "react-redux";
import * as postActions from "../../Redux/Actions/PostActions";
import { Link } from "react-router-dom";
import clap from "./clap.png";
import "./style.css";

const PostDetails = (props) => {
  const { post } = props;
  const onHandleClap = () => {
    props.giveClap(props.post.id);
  };
  if (!props.post) {
    return (
      <div className="container">
        <h4>No post found</h4>
      </div>
    );
  }

  function createMarkup() {
    return {
      __html: post.description,
    };
  }

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <br />
      <h4>{post.category}</h4>
      <p className="text-muted">
        Posted On: {post.postedOn.toString().slice(4, 15)}
      </p>
      <hr />
      {/* <p>{post.description}</p> */}
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      <hr />
      <button type="button" class="btn btn-info btn-sm">
        Claps <span class="badge badge-light">{props.post.clapCount}</span>
        <span class="sr-only">unread messages</span>
      </button>
      <br />
      Give a clap if you liked it!{" "}
      <img id="clap" onClick={onHandleClap} alt="clap" src={clap} />
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
