import React from "react";
import PropTypes from "prop-types";
import "./VideoComments.css";
import Comment from "../Comment";

const VideoCommentsPresenter = props => (
  <div className={"video-comments-video-comments"}>
    <ul>
      <div className={"video-comments-comment-field"}>
        {props.comments.map(comment => (
          <Comment
            key={comment.id}
            commentId={comment.id}
            videoId={props.videoId}
            creator={comment.creator.username}
            comment={comment.message}
            profileImage={comment.creator.profile_image}
            postTime={comment.natural_time}
            toggleCommentOp={props.toggleCommentOp}
            seeCommentOp={props.seeCommentOp}
            deleteCommentByCreator={props.deleteCommentByCreator}
            videoCreator={props.videoCreator}
          />
        ))}
      </div>
    </ul>
  </div>
);

VideoCommentsPresenter.propTypes = {
  comments: PropTypes.array,
  seeCommentOp: PropTypes.bool.isRequired,
  toggleCommentOp: PropTypes.func.isRequired,
  deleteCommentByCreator: PropTypes.func.isRequired,
  videoCreator: PropTypes.string.isRequired,
  videoId: PropTypes.number.isRequired
};

export default VideoCommentsPresenter;
