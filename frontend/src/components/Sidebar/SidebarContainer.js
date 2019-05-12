import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarPresenter from "./SidebarPresenter";

class SidebarContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    followingList: PropTypes.array,
    myFollowingList: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };
  componentDidMount() {
    const { myFollowingList, username } = this.props;
    myFollowingList(username);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.followingList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { followingList } = this.props;
    const { loading } = this.state;
    return <SidebarPresenter followingList={followingList} loading={loading} />;
  }
}

export default SidebarContainer;
