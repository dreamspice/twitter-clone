import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Avatar from "@mui/material/Avatar";

function LeftSlider() {
  return (
    <div className="flex flex-col h-screen justify-between text-white text-xl font-normal pr-18">
      <div className="flex flex-col gap-6">
        <TwitterIcon
          sx={{ fontSize: 35, color: "white" }}
          className="mb-2 mt-4"
        />
        <div className="flex items-center gap-3">
          <HomeOutlinedIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Home</h3>
        </div>
        <div className="flex items-center gap-3">
          <TagIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Explore</h3>
        </div>
        <div className="flex items-center gap-3">
          {/* <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon sx={{ fontSize: 35, color: "white" }} />
          </Badge> */}
          <NotificationsNoneIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Notifications</h3>
        </div>
        <div className="flex items-center gap-3">
          <EmailOutlinedIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Messages</h3>
        </div>
        <div className="flex items-center gap-3">
          <BookmarkBorderOutlinedIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Bookmarks</h3>
        </div>
        <div className="flex items-center gap-3">
          <FeaturedPlayListOutlinedIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Lists</h3>
        </div>
        <div className="flex items-center gap-3">
          <PersonOutlineOutlinedIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>Profile</h3>
        </div>
        <div className="flex items-center gap-3">
          <MoreHorizOutlinedIcon sx={{ fontSize: 35, color: "white" }} />
          <h3>More</h3>
        </div>
        <button
          className="bg-sky-500 py-3 rounded-full font-medium hover:bg-sky-600 transition-all
          duration-300"
        >
          Tweet
        </button>
      </div>
      <div className="flex justify-center items-center gap-3 text-base mb-6">
        <Avatar />
        <div className="mr-4">
          <p className="font-medium">Maciej</p>
          <p className="text-gray-400">@Maciej73797965</p>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
    </div>
  );
}

export default LeftSlider;
