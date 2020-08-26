import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul className="nav-links">
        <Link to="/create-post">
          <li>Create Post</li>
        </Link>
        <Link to="/posts">
          <li>All Posts</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
