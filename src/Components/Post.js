import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./PostStyle.css";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Ganimed-avatar"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Ganimed</h3>
      </div>
      <img
        src="https://nerdist.com/wp-content/uploads/2020/04/DC-Comics-New-Comics-Header.jpg"
        alt="post"
        className="post__image"
      />
      <h4>
        Ganimed:{" "}
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
          odio?
        </span>
      </h4>
    </div>
  );
}

export default Post;
