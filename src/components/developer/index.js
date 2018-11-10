import React, { Component } from 'react'
import { Row } from 'reactstrap';
import { Card } from 'antd';

import Container, { Col } from '../base/layout';
import { ButtonPrimary } from '../base/button';

export default class Developer extends Component {
  render() {
    return (
      <Container>
        <Card className='col-12 pt-4 pb-3'>
          <Row>
            <Col className='text-center'>
              <h2>
                <b>Keerati (Tae)</b>
              </h2>
              <h4>
                <b>Github: @imgrbs</b> <br/>
                <b>Medium: @taekeerati</b> <br/>
              </h4>
              <hr/>
              <h2>
                <i>My Resume</i> <br/>
                <img src="/img/developer_qrcode.png" alt=""/> <br/>
                https://goo.gl/urT9qD
              </h2>
              </Col>
            <Col className='text-center'>
              <a href="/">Back to Home</a>
            </Col>
          </Row>
        </Card>
      </Container>
    )
  }
}
