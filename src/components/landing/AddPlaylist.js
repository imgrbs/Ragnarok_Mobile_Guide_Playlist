import React, { Component } from "react";
import { notification } from 'antd';

import { insert } from "../../config/firebase";
import { UserContext } from "../../context";


const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Add Playlist Success !'
  });
};

class AddPlaylist extends Component {
  state = {
    url: ""
  };

  handleUrl = e => {
    this.setState({ url: e.target.value });
  };

  addPlaylist = () => {
    const { url } = this.state;
    const { user } = this.props;
    let index = url.indexOf("list=") + 5;
    let playlistId = url.substring(index, url.length);
    console.log(this.props)
    this.props.handleModal();
    insert(`/playlist/${playlistId}`, { url, playlistId, userUid: user.uid });
    openNotificationWithIcon('success');
  };

  render() {
    return (
      <form onSubmit={this.addPlaylist}>
        <label htmlFor="url">Youtube Playlist URL</label>
        <input
          onChange={this.handleUrl}
          value={this.state.url}
          placeholder="https://www.youtube.com/watch?list=PLG5z-uEDlRpPFyhPycFrR5dm_OejrgMVJ"
          id="url"
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary w-100 mt-3" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default ({ handleModal }) => (
  <UserContext.Consumer>
    {({ user }) => <AddPlaylist user={user}  handleModal={handleModal} />}
  </UserContext.Consumer>
);
