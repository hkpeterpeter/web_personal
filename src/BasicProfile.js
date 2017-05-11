import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Row,
  Col,
  Image,
  Button,
  Modal,
} from 'react-bootstrap';

class BasicProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false };

    // Event binding
    // 5 ways for event binding in React application
    // Reference: https://medium.freecodecamp.com/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const profile = this.props.profile;
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={2} md={2} lg={2}>


            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>WeChat QR code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image
                  className="center-block"
                  responsive
                  src={'assets/weixin.png'} alt={`${profile.firstName} ${profile.lastName} WeChat QR Code`}
                />
              </Modal.Body>
            </Modal>

            <Image
              className="center-block"
              responsive
              src={`assets/${profile.picture}`} alt={`${profile.firstName} ${profile.lastName} Profile`}
            />
            <br />

            {/* icons links */}
            <a href="//fb.com/cspeter">
              <i className="fa fa-2x fa-facebook-official" aria-hidden="true" />
            </a>
            <span>&nbsp;</span>
            <a href="//www.linkedin.com/in/hkpeterpeter">
              <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
            </a>
            <span>&nbsp;</span>
            <a href="//github.com/hkpeterpeter">
              <i className="fa fa-2x fa-github-square" aria-hidden="true" />
            </a>
            <span>&nbsp;</span>
            <a href="//api.whatsapp.com/send?phone=85264921981">
              <i className="fa fa-2x fa-whatsapp" aria-hidden="true" />
            </a>
            <span>&nbsp;</span>

            <a href="#" onClick={this.open}>
              <i className="fa fa-2x fa-weixin" aria-hidden="true" />
            </a>

          </Col>
          <Col xs={12} sm={5} md={5} lg={5}>
            <div>
              <h3><strong>{profile.firstName} {profile.lastName}</strong></h3>
              <em>{profile.title}</em>,
              <span> Department of {profile.department}, {profile.university}</span>
              <p>{profile.office} via {profile.officeLocation} </p>
              <p>{profile.degrees.map((degree, index) =>
                <span key={index} >{degree}<br /></span>) }</p>
              <p>{profile.description}</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

BasicProfile.propTypes = {

  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    middleName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    office: PropTypes.string.isRequired,
    officeLocation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    degrees: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,

};


export default BasicProfile;
