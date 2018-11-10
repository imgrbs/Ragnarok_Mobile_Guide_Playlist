import React, { Component } from "react";
import { Row } from 'reactstrap';
import { Card } from 'antd';

import { isEmpty } from 'lodash'

import firebase, { insert, getOne } from '../../config/firebase'

import Container, { Col } from "../base/layout";
import { ButtonPrimary } from "../base/button";
import { UserContext } from "../../context";

export default class LoginIndex extends Component {
  state = {

  }

  loginWithGoogle = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(userAuth => {
      const uid = userAuth.user.uid
      const info = userAuth.additionalUserInfo
      const profile = info.profile;
      getOne(`/user`, uid).once("value").then(snap => {
        const user = snap.val()
        if (isEmpty(user)) {
          insert(`/user/${uid}`, {
            providerId: info.providerId,
            ...profile
          })
        }
        this.setState({ user })
        window.location.href = '/'
      })
    })
  }

  render() {
    return (
      <UserContext.Provider user={this.state.user}>
          <Container>
            <Card className='col-12 py-5'>
              <Row>
                <Col className='text-center'>
                    <h3>
                      Please login before contribute <i>Guide Playlist</i>.
                    </h3>
                  </Col>

                <Col className='text-center'>
                  <ButtonPrimary className='px-3' onClick={e => this.loginWithGoogle(e)}>
                    <img src="/img/google.png" alt=""/>
                    Login with Google
                  </ButtonPrimary>
                </Col>
              </Row>
            </Card>
          </Container>
      </UserContext.Provider>
    );
  }
}
