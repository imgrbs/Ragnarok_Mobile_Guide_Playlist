import React, { Component } from "react";
import styled from 'styled-components';
import { Card } from "antd";

import { getAll } from "../../config/firebase";

import Container, { Col, ContainerFluid, VideoContainer } from "../base/layout";
import Playlist from "./Playlist";
import Header from "../base/header";

const FluidStyled = styled(ContainerFluid)`
    background-color: #f1f1f1 !important;
`

const Hero = () => (
  <section className="jumbotron pt-4 py-3 text-center">
    <div className="container">
      <h1 className="jumbotron-heading">Welcome to Ragnarok M Eternal Love Guide Playlist</h1>
      <p className="lead text-muted">
        Website for a Newbie Player of Ragnarok M Eternal Love and Everyone who want to find a guideline :D <br />
        Ragnarok M: Eternal Love is an open world MMORPG based on the ever famous Ragnarok Online,<br />
        and inherits the RO legacy that drew the attention of millions
      </p>
    </div>
  </section>
)

const PlaylistContainer = ({ loading, header, playlists }) => (
  <React.Fragment>
    <Col>
    <Header>{header}</Header>
    </Col>
    {
      loading ?
        (
          <Col>
            <VideoContainer>
              {
                [1, 2, 3].map(key => <Card key={key} loading={true} className='w-100' />)
              }
            </VideoContainer>
          </Col>
        )
      : playlists.map(playlist => (
        <Playlist key={playlist} playlistId={playlist} />
      ))
    }
  </React.Fragment>
)

export default class LandingIndex extends Component {
  state = {
    recommends: [],
    recommendLoading: true,
    playlists: [],
    playlistLoading: true
  }
  componentDidMount = () => {
    getAll('/recommend').once('value').then((snap) => {
      const recommends = Object.keys(snap.val())
      this.setState({ recommends, recommendLoading: false })
    })
    getAll('/playlist').once('value').then((snap) => {
      const playlists = Object.keys(snap.val())
      this.setState({ playlists, playlistLoading: false })
    })
  }
  render() {
    const { recommends, playlists, recommendLoading, playlistLoading } = this.state
    return (
      <React.Fragment>
        <Container>
          <Col>
            <Hero />
          </Col>
          <PlaylistContainer loading={recommendLoading} header="Recommend Guideline Playlist" playlists={recommends} />
        </Container>
        <FluidStyled>
          <Container>
            <PlaylistContainer loading={playlistLoading} header="Guideline Playlist" playlists={playlists} />
          </Container>
        </FluidStyled>
      </React.Fragment>
    );
  }
}
