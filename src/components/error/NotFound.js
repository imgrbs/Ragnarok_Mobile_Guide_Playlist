import React, { Component } from 'react'
import { Row } from 'reactstrap';
import { Card } from 'antd';

import Container, { Col } from '../base/layout';
import { ButtonPrimary } from '../base/button';

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <Card className='col-12 py-5'>
          <Row>
            <Col className='text-center'>
                <h3>
                  404 - <i>Not Found.</i>
                </h3>
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
