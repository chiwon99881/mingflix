import React from "react";
import styles from "./styles.module.scss";
import CloseIcon from "react-ionicons/lib/MdClose";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MoreOption = props => {
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <header className={styles.header}>
          <h4 className={styles.title}>{"Option"}</h4>
          <span className={styles.closeIcon} onClick={props.toggleMoreOption}>
            <CloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
          </span>
        </header>
        <div className={styles.column}>
          <span className={styles.delete} onClick={props.handleDelete}>
            {"영상 삭제"}
          </span>
          <Link to={`/update/${props.videoId}/`} className={styles.link}>
            <span className={styles.modify}>{"영상 수정"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

MoreOption.propTypes = {
  videoId: PropTypes.number.isRequired,
  toggleMoreOption: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default MoreOption;
