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
    <form onSubmit={handleSubmit}>
      <h2>POsts</h2>
      <h3>Add Post</h3>
      <input
        type="text"
        value={post.title}
        className="form-control"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        type="text"
        value={post.description}
        className="form-control"
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default CreatePost;
