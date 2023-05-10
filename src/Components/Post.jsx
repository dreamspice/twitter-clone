import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Post(props) {
  const [heartColor, setHeartColor] = useState(false);
  const [commentColor, setCommentColor] = useState(false);
  const changeHeartColor = () => {
    setHeartColor(!heartColor);
    return props.addLike();
  };

  const changeCommentColor = () => {
    setCommentColor(!commentColor);
  };
  return (
    <div className="w-full p-4 border-b-[1px] border-gray-700">
      <div className="flex">
        <div className="mr-4">
          <Avatar
            sx={{ width: "64px", height: "64px", zIndex: "-1" }}
            src={props.photo}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-1">
            <div>
              <span className="font-medium text-lg mr-2">{props.name}</span>
              <span className="text-gray-500">{props.time}</span>
            </div>
            <button>
              <MoreHorizOutlinedIcon sx={{ color: "rgb(107, 114, 128)" }} />
            </button>
          </div>
          <div>{props.text}</div>
          <div className="mt-2">
            <button
              className={`mr-4  text-gray-500 hover:text-sky-500 ${
                commentColor ? "text-sky-500" : ""
              }`}
              onClick={changeCommentColor}
            >
              <ChatBubbleOutlineOutlinedIcon />
              <span className="ml-1">{props.comments}</span>
            </button>
            <button
              className={`mr-4 text-gray-500 hover:text-red-500 ${
                heartColor ? "text-red-500" : ""
              }`}
              onClick={changeHeartColor}
            >
              <FavoriteBorderOutlinedIcon />
              <span className="ml-1">{props.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
