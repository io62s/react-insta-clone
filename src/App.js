import React from "react";
import "./App.css";
import Post from "./Components/Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
          className="app__headerImage"
        />
      </div>

      <Post />
    </div>
  );
}

export default App;
