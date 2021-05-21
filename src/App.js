import React, { useState, useEffect } from "react";
import Post from "./Components/Post";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";
import { db } from "./firebase";
import "./App.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   password: ""
  // });

  const formStyle = {
    display: "block",
    margin: "1rem auto",
  };

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      let dbPosts = snapshot.docs.map((doc) => ({
        post: doc.data(),
        id: doc.id,
      }));
      setPosts(dbPosts);
    });
  }, []);

  const signUp = (e) => {};

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="logo"
              className="app__headerImage"
            />
          </center>
          <form className="app__signup">
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              style={formStyle}
              onClick={signUp}
              variant="contained"
              color="secondary">
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
          className="app__headerImage"
        />
      </div>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        Sign Up
      </Button>

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
