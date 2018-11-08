import React, { Component } from "react";

import Container, { Col } from "../base/layout";
import Card from "../base/card";
import Header from "../base/header";

const Hero = () => (
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Album example</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
      <p>
        <a href="#" class="btn btn-primary m-2">Main call to action</a>
        <a href="#" class="btn btn-secondary m-2">Secondary action</a>
      </p>
    </div>
  </section>
)

export default class LandingIndex extends Component {
  state = {
    videos: [1, 2, 3, 4, 5]
  };
  render() {
    return (
      <Container>
        <Col>
          <Hero />
        </Col>
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
