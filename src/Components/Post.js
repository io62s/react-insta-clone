import React from "react";
import "./PostStyle.css";

function Post() {
  return (
    <div className="post">
      <h3>Ganimed</h3>
      <img
        src="https://nerdist.com/wp-content/uploads/2020/04/DC-Comics-New-Comics-Header.jpg"
        alt="post"
        className="post__image"
      />
      <h4>
        Ganimed: <span>caption</span>
      </h4>
    </div>
  );
}

export default Post;

// https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png
