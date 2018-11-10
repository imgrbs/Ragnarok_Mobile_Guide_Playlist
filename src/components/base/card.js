import React, { Component } from "react";
import styled from 'styled-components'

import YouTube from "react-youtube";
import { Modal } from "antd";
import { ButtonPrimary } from "./button";

const ModalCustom = styled(Modal)`
    .ant-modal-body {
        @media only screen and
        (min-width: 1024px) {
            padding: 58px 24px !important;
            min-height: 60vh;

            iframe {
                min-height: 500px;
            }
        }
    }
`

export default class Card extends Component {
  state = {
    isOpen: false
  };

  handleView = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { video } = this.props;
    return (
      <React.Fragment>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card mb-4 shadow-sm">
            <img
              src={video.snippet.thumbnails.medium.url}
              className="card-img-top"
              height="225"
              width="100%"
              alt={video.snippet.title}
            />
            <div className="card-body">
              <p className="card-text">{video.snippet.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <ButtonPrimary
                    type="button"
                    className="btn btn-sm"
                    onClick={this.handleView}
                  >
                    View
                </ButtonPrimary>
                <small className="text-muted">
                  {video.snippet.channelTitle}
                </small>
              </div>
            </div>
          </div>
        </div>
        <ModalCustom
            closable
            destroyOnClose
            className='w-75 py-5'
            visible={this.state.isOpen}
            onCancel={this.handleView}
            footer={null}
            cancelText={'Close'}
        >
            <h4>{video.snippet.title}</h4>
            <YouTube
                videoId={video.snippet.resourceId.videoId}
                className='w-100 h-100'
                opts={{
                    playerVars: {
                      autoplay: 1
                    }
                  }}
            />
        </ModalCustom>
      </React.Fragment>
    );
  }
}
