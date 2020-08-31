import React, { useEffect } from "react";
import * as postActions from "../../Redux/Actions/PostActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const TableRow = (props) => {
  const history = useHistory();

  const { post } = props;
  const onHandleDelete = (id) => {
    props.removePost(id);
  };

  const onHandleEdit = (post) => {
    const isEdit = true;
    history.push({
      pathname: "/create-post",
      state: { isEdit, post },
    });
  };

  useEffect(() => {
    console.log("table", props.post);
  }, []);
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.category}</td>
      <td>{post.clapCount}</td>
      <td>
        <button
          className="btn btn-danger mr-2"
          type="submit"
          onClick={() => onHandleDelete(post.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning"
          type="submit"
          onClick={() => onHandleEdit(post)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    removePost: (id) => dispatch(postActions.removePost(id)),
  };
}

export default connect(null, mapDispatchToProps)(TableRow);
