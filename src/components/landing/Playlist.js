import React, { Component } from 'react'

import axios from 'axios';

import { API_URL, PLAYLIST_ENDPOINT } from '../../config/youtube'

import { Col, VideoContainer } from '../base/layout';
import VideoCard from "../base/card";

export default class Playlist extends Component {
  state = {
    playlistItems: []
  }
  componentDidMount = async () => {
    const { playlistId } = this.props
    const { data: playlists } = await axios.get(`${API_URL}/${PLAYLIST_ENDPOINT}&playlistId=${playlistId}`)
    this.setState({ playlistItems : playlists.items })
    console.log(playlists)
  }

  render() {
    return (
      <React.Fragment>
        <Col>
          <VideoContainer>
            {
                this.state.playlistItems.map((video) => (
                  <VideoCard key={video.etag} video={video} />
                ))
            }
          </VideoContainer>
        </Col>
      </React.Fragment>
    )
  }
}
