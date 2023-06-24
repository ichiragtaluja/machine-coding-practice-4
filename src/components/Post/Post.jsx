import "./Post.css";

import React, { useState } from "react";
import { getTimeDifference } from "../../helpers/date";
import { FaRegComment } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import {
  BiDownArrow,
  BiSolidDownArrow,
  BiUpArrow,
  BiSolidUpArrow,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useData } from "../../contexts/DataContext";

export const Post = ({ userPost }) => {
  const navigate = useNavigate();
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = userPost;

  const { bookmarkHandler, upvoteHandler, downvoteHandler } = useData();

  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  return (
    <div className="post-container">
      <div className="upvote-section">
        {!isUpvoted ? (
          <BiUpArrow
            fontSize={"1.5rem"}
            onClick={() => {
              setIsUpvoted(true);
              setIsDownvoted(false);
              upvoteHandler(postId);
            }}
          />
        ) : (
          <BiSolidUpArrow
            fontSize={"1.5rem"}
            onClick={() => {
              setIsUpvoted(true);
              setIsDownvoted(false);
              upvoteHandler(postId);
            }}
          />
        )}
        <p className="upvotes">{upvotes - downvotes}</p>
        {!isDownvoted ? (
          <BiDownArrow
            fontSize={"1.5rem"}
            onClick={() => {
              setIsUpvoted(false);
              setIsDownvoted(true);
              downvoteHandler(postId);
            }}
          />
        ) : (
          <BiSolidDownArrow
            fontSize={"1.5rem"}
            onClick={() => {
              setIsUpvoted(false);
              setIsDownvoted(true);
              downvoteHandler(postId);
            }}
          />
        )}
      </div>
      <div className="post-content-section">
        <div className="post-user-details-section">
          <img className="profile-pic" src={picUrl} />
          <div>
            <span className="username ">Posted by</span>{" "}
            <span className="username color">@{username}</span>{" "}
            <span className="username ">{getTimeDifference(createdAt)}</span>
          </div>
        </div>
        <div className="post-content-section">
          <h3>{post}</h3>
          <div className="pill-container">
            {tags?.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="post-description-container">
            <p>{postDescription}</p>
          </div>
        </div>
        <div className="post-toolbar-section">
          <div className="comments-container">
            <FaRegComment onClick={() => navigate(`/post/${postId}`)} />
          </div>
          <div className="share-container">
            <BsShare />
          </div>
          <div
            onClick={() => bookmarkHandler(postId)}
            className="bookmark-container"
          >
            {!isBookmarked ? <FaRegBookmark /> : <FaBookmark />}
          </div>
        </div>
      </div>
    </div>
  );
};

// {
//     postId: "36635-787-65778",
//     username: "tanaypratap",
//     name: "Tanay Pratap",
//     picUrl: "http://bit.ly/42Zm7tM",
//     post: "Join InvactHQ for MBA",
//     postDescription:
//       "Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact.",
//     upvotes: 350,
//     downvotes: 50,
//     tags: ["mba", "business", "bootcamp"],
//     createdAt: "2023-06-24T12:00:00Z",
//     comments: [
//       {
//         commentId: "89898-856-87576",
//         username: "ashwin4real",
//         picUrl: "http://bit.ly/42Zm7tM",
//         likes: 0,
//         comment: "Interested",
//         createdAt: "2023-06-24T12:01:00Z",
//       },
//     ],
//     isBookmarked: false,
//   },
