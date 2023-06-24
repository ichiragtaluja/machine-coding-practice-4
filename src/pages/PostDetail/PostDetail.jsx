import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Post } from "../../components/Post/Post";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers/date";
import "./PostDetail.css"

export const PostDetail = () => {
  const { sortedForumData } = useData();
  const { id } = useParams();

  const selectedPost = sortedForumData?.posts?.find(
    ({ postId }) => postId === id
  );

  console.log("selecte", selectedPost);
  return (
    <div>
      <Link to="/posts">Back to home</Link>
      <Post userPost={selectedPost} />

      <div className="comments-section">
        {selectedPost?.comments?.map(
          ({ commentId, username, picUrl, comment, createdAt }) => (
            <div>
              <div className="comment-body" key={commentId}>
                <div>
                  <img className="profile-pic" src={picUrl} />
                </div>
                <div>
                  <span className="name">{username}</span>
                  <span className="username">@{username}</span>{" "}
                  <span className="username">
                    ...{getTimeDifference(createdAt)}
                  </span>
                  <div>
                    <span className="username">Replying to </span>
                    <span className="color">@{sortedForumData.username}</span>
                  </div>
                  <p>{comment}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );

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
};
