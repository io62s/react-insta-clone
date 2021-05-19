import React, { useState, useEffect } from "react";
import Post from "./Components/Post";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      let dbPosts = snapshot.docs.map((doc) => ({
        post: doc.data(),
        id: doc.id,
      }));
      setPosts(dbPosts);
    });
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
          className="app__headerImage"
        />
      </div>

      {posts.map(({ post, id }) => (
        <Post
          key={id}
          img={post.img}
          userName={post.userName}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
