import React, { Component } from "react";

import Container, { Col } from "../base/layout";
import Card from "../base/card";
import Header from "../base/header";

export default class LandingIndex extends Component {
  state = {
    videos: [1, 2, 3, 4, 5]
  };
  render() {
    return (
      <Container>
        <Col>
          <Header>Playlists</Header>
        </Col>
        {
            this.state.videos.map(() => (
            <Card />
            ))
        }
      </Container>
    );
  }
}
