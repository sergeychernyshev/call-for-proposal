import React from 'react';

import { Link } from 'react-router';

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default class CallForProposals extends React.Component {
  render() {
    return (
      <Grid fluid>
        <h1>Call for Proposals</h1>
        <p>Propose a talk at a local meetup</p>
        <Row>
          <ul>
          <li><Link to="/1234er/speak">Speak at events</Link></li>
          <li><Link to="/call-for-proposals">Organizer? Request proposals.</Link></li>
          </ul>
        </Row>
      </Grid>
    );
  }
}
