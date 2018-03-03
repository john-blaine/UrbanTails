import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { Avatar } from 'material-ui';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';


class Landing extends React.Component {
  render() {
    return (
      <div>
        <Navbar link="Login" linkurl="/login"/>
        <Jumbotron>
          <div className="content">
            <h1>Urban Tails</h1>
            <h3>Pet boarding wherever your adventure takes you</h3>
            <Link to='/signup' className="btn btn-default btn-lg">Get Started</Link>
          </div>
        </Jumbotron>
        <div class="container">
          <h2 className="heading-landing">How it works</h2>
          <Row className="landing-content">
            <Col md={3}>
              <i class="material-icons md-36">face</i>
              <h3>Start</h3>
              <p>Create a free profile as either a pet owner or a host for pets</p>
            </Col>
            <Col md={3}>
              <i class="material-icons md-36">autorenew</i>
              <h3>Connect</h3>
              <p>Searching for places to stay or open your home to host pets and their owners.</p>
            </Col>
            <Col md={3}>
              <i class="material-icons md-36">today</i>
              <h3>Plan</h3>

              <p>Choose a listing and plan your stay or manage your bookings.</p>
            </Col>
            <Col md={3}>
              <i class="material-icons md-36">thumb_up</i>
              <h3>Share</h3>
              <p>Share your experience and help build a community of animal lovers.</p>
            </Col>
          </Row>
          <hr/>
          <h2 className="heading-landing">About Us</h2>
          <Row className="landing-content padded">
            <Col md={3} className="landing-box">
              <Avatar src="" size={60}/>
              <h4>Annah Patterson</h4>
              <p>Lead Engineer</p>
            </Col>
            <Col md={3}>
              <Avatar src="" size={60}/>
              <h4>Michael Shin</h4>
              <p>Scrum Master</p>
            </Col>
            <Col md={3}>
              <Avatar src="" size={60}/>
              <h4>Queenie Smith</h4>
              <p>Product Owner</p>
            </Col>
            <Col md={3}>
              <Avatar src="" size={60}/>
              <h4>Yufan Wang</h4>
              <p>Lead Engineer</p>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = Landing;
