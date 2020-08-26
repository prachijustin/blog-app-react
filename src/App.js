import React from "react";
import "./App.css";
import Header from "./Components/Common/Header";
import Home from "./Components/Home";
import CreatePost from "./Components/Posts/CreatePost";
import PostList from "./Components/Posts/PostList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/posts" component={PostList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
