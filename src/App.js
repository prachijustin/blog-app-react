import React from "react";
import "./App.css";
import Header from "./Components/Common/Header";
import PostDetails from "./Components/PostDetails";
import CreatePost from "./Pages/CreatePost";
import ManagePosts from "./Pages/ManagePosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

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
