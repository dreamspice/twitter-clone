import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function WhatsHappening() {
  const submit = (e) => {
    e.preventDefault();
    console.log("siema");
  };

  useSelector((state) => state.counter);

  return (
    <div className="w-full">
      <div className="flex justify-center pl-8 mt-8">
        <div className="pr-8">
          <Avatar sx={{ width: "64px", height: "64px" }} />
        </div>
        <div className="flex flex-col gap-8 basis-full">
          <form onSubmit={submit}>
            <div className="pl-6 mt-4">
              <input
                placeholder="What's happening?"
                type="text"
                className="w-full bg-black outline-none placeholder:text-xl border-b-2 border-gray-500 pb-16"
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
