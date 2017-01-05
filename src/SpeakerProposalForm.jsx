import React from 'react';

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default class SpeakerProposalForm extends React.Component {
  render() {
    return (
      <Grid fluid>
        <h1>Propose Your Talk</h1>
        <Row>
          <Col md={6}>
            A
          </Col>
          <Col md={6}>
            B
          </Col>
        </Row>
      </Grid>
    );
  }
}
