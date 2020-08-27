import React, { useState } from "react";
const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>POsts</h2>
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
    </div>
  );
};

export default CreatePost;
