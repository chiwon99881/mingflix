import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";
import IosClose from "react-ionicons/lib/IosClose";

const CommentPresenter = props => {
  return (
    <div className={"comment-one-to-one-comment"}>
      <img
        src={props.profileImage || require("../../images/noPhoto.jpg")}
        alt={props.creator}
        className={"comment-profile-image"}
      />
      <div className={"comment-divider"}>
        <div className={"comment-data"}>
          <span className={"comment-creator"}>{props.creator}</span>
          <span className={"comment-time"}>{props.postTime}</span>
        </div>
        <span className={"comment-comments"}>{props.comment}</span>
      </div>
      {props.currentCreator === props.videoCreator && (
        <div className={"comment-more"}>
          <section onClick={props.handleDeleteByVideoCreator}>
            <IosClose
              icon={"md-more"}
              fontSize={"25px"}
              color={"black"}
              className={"comment-more-icon"}
            />
          </section>
        </div>
      )}
      {props.currentCreator === props.commentCreator && (
        <div className={"comment-more"}>
          <section onClick={props.handleDeleteByCommentCreator}>
            <IosClose
              icon={"md-more"}
              fontSize={"25px"}
              color={"black"}
              className={"comment-more-icon"}
            />
          </section>
        </div>
      )}
    </div>
  );
};

CommentPresenter.propTypes = {
  creator: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  postTime: PropTypes.string.isRequired,
  currentCreator: PropTypes.string.isRequired,
  commentCreator: PropTypes.string.isRequired,
  videoCreator: PropTypes.string.isRequired,
  handleDeleteByVideoCreator: PropTypes.func.isRequired,
  handleDeleteByCommentCreator: PropTypes.func.isRequired
};

export default CommentPresenter;
