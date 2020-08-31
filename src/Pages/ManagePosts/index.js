import React from "react";
import { connect } from "react-redux";
import TableRow from "../../Components/TableRow";

const ManagePosts = (props) => {
  return (
    <div className="container">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Claps</th>
          <th>#</th>
        </tr>
        {props.posts.map((post) => (
          <TableRow post={post} key={post.id} />
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(ManagePosts);
