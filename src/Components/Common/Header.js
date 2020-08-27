import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <ul className="nav-links">
    //     <Link to="/create-post">
    //       <li>Create Post</li>
    //     </Link>
    //   </ul>
    // </nav>
    <nav className="navbar navbar-light ">
      <Link to="/">
        <span className="navbar-brand">Blogging Application</span>
      </Link>

      <div>
        <Link to="/create-post">
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Create Post
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
