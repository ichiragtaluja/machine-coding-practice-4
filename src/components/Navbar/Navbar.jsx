import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiRocketLine } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useData } from "../../contexts/DataContext";

export const Navbar = () => {
  const { forumData } = useData();
  return (
    <div className="sidebar">
      <div>
        <li>
          <AiOutlineHome />
          <span>Home</span>
        </li>
        <li>
          <RiRocketLine />
          <span>Explore</span>
        </li>
        <li>
          <FiBookmark />
          <span>Bookmarks</span>
        </li>
        <li>
          <CgProfile />
          <span>Profile</span>
        </li>
      </div>
      <div className="user-profile-container">
        <div>
          <img className="profile-pic" src={forumData.picUrl} />
        </div>
        <div>
          <p className="name">{forumData.name}</p>
          <p className="username">@{forumData.username}</p>
        </div>
      </div>
    </div>
  );
};
