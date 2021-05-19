import React, { useState } from "react";
import "./App.css";
import Post from "./Components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-in-order-resize-1585339521.jpg?crop=1.00xw:0.752xh;0,0.106xh&resize=1200:*",
      userName: "Ganimed",
      caption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,odio?",
    },
    {
      id: 2,
      img: "https://miro.medium.com/max/4000/0*IFDLLCTpkNxhEkjZ.png",
      userName: "Erebus",
      caption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,odio?",
    },
    {
      id: 3,
      img: "https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400",
      userName: "Io",
      caption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,odio?",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
          className="app__headerImage"
        />
      </div>

      {posts.map((post) => (
        <Post
          key={post.id}
          img={post.img}
          userName={post.userName}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
