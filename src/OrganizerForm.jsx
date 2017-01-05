import React from 'react';

import { Link } from 'react-router';

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default class OrganizerForm extends React.Component {
  render() {
    return (
      <Grid fluid>
        <h1>Invite Speakers</h1>
        <p>Invite people to speak at your events</p>
      </Grid>
    );
  }
}
