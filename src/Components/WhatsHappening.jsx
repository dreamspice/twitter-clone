import { useState, useId } from "react";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import "firebase/database";
import moment from "moment";
import { useDispatch } from "react-redux";
import { postsActions } from "../store";

function WhatsHappening() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { displayName, email, photoURL, uid } = currentUser;
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const newPostRef = firebase.database().ref("posts").push();
    const postId = newPostRef.getKey();
    const newPost = {
      postId,
      displayName,
      text,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      photoURL,
      howManyLikes: 0,
      comments: 0,
      whoLiked: [],
    };
    if (!text) return;
    newPostRef.set(newPost);
    setText("");

    const postsRef = firebase.database().ref("posts");
    try {
      const snapshot = await postsRef.once("value");
      const posts = snapshot.val();
      dispatch(postsActions.setPosts(posts));
    } catch (error) {
      dispatch(postsActions.setError(error.message));
    }
  };
  return (
    <div className="w-full pb-2 border-b-[1px] border-gray-500">
      <div className="flex justify-center pl-8 mt-8">
        <div className="pr-8">
          <Avatar
            sx={{ width: "64px", height: "64px", zIndex: "-1" }}
            src={photoURL}
          />
        </div>
        <div className="flex flex-col gap-8 basis-full">
          <form onSubmit={submit}>
            <div className="pl-6 mt-4">
              <input
                placeholder="What's happening?"
                type="text"
                className="w-full bg-black outline-none placeholder:text-xl pb-16"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </div>

            <div className="flex items-center justify-between px-6 mt-2">
              <div className="flex gap-4">
                <ImageIcon />
                <GifBoxIcon />
                <EmojiEmotionsIcon />
              </div>
              <div>
                <button
                  className="bg-sky-500 px-4 py-2 rounded-full font-medium text-lg"
                  type="submit"
                >
                  Tweet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WhatsHappening;
