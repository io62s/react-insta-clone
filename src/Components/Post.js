import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./PostStyle.css";

function Post({ img, userName, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={userName}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{userName}</h3>
      </div>
      <img src={img} alt="post" className="post__image" />
      <h4>
        {userName}: <span>{caption}</span>
      </h4>
    </div>
  );
}

export default Post;
