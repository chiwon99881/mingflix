import SidebarContainer from "./SidebarContainer";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../Redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    users: { followingList, username }
  } = state;
  return {
    followingList,
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    myFollowingList: username => {
      dispatch(userAction.getFollowingList(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
