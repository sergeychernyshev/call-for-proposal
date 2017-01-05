import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router'
import { Provider } from 'react-redux'

import CallForProposals from './CallForProposals.jsx'
import SpeakerProposalForm from './SpeakerProposalForm.jsx'
import OrganizerForm from './OrganizerForm.jsx'

import { Nav, Navbar, NavItem } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">SpeakerForce</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">Call for Proposals</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/users/edit.php">My Account</NavItem>
              <NavItem eventKey={2} href="/users/logout.php">Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}

        <Navbar className="footer" style={{borderBottom: 0, marginBottom: 0, bottom: 0, position: 'absolute', width: '100%'}}>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://bootswatch.com/lumen/">Lumen Bootstrap Theme</NavItem>
          </Nav>
        </Navbar>

      </div>
    );
  }
}

render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={CallForProposals} ignoreScrollBehavior={true}/>
      <Route path="/:meetupSlug/speak" component={SpeakerProposalForm}/>
      <Route path="/call-for-proposals" component={OrganizerForm}/>
    </Route>
  </Router>
), document.getElementById('app'))
