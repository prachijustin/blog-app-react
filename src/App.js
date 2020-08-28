import React from "react";
import "./App.css";
import Header from "./Components/Common/Header";
import Home from "./Components/Home";
import CreatePost from "./Components/Posts/CreatePost";
import PostDetails from "./Components/Posts/PostDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManagePosts from "./Components/Posts/ManagePosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/manage-posts" component={ManagePosts} />
          <Route path="/post/:id" component={PostDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
