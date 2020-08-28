import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light ">
      <Link to="/">
        <span className="navbar-brand">Blogging Application</span>
      </Link>

      <div>
        <Link to="/create-post">
          <button className="btn btn-success my-2 my-sm-0 mr-2" type="submit">
            Create Post
          </button>
        </Link>
        <Link to="/manage-posts">
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Manage Posts
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
