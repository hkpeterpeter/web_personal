import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Row,
  Col,
  Image,
  Modal,
} from 'react-bootstrap';

const iconLinksData = [
  { url: '//fb.com/cspeter', iconStyle: 'fa-facebook-official' },
  { url: '//www.linkedin.com/in/hkpeterpeter', iconStyle: 'fa-linkedin-square' },
  { url: '//api.whatsapp.com/send?phone=85264921981', iconStyle: 'fa-whatsapp' },
];
const iconsLinks = iconLinksData.map((item, i) => (
  <span>
    <a href={item.url}>
      <i className={`fa fa-2x ${item.iconStyle}`} aria-hidden="true" />
    </a>&nbsp;
  </span>
));

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

            <div className="text-center">
              {iconsLinks}
              <span>
                <i onClick={this.open} className="fa fa-2x fa-weixin text-info" aria-hidden="true" />
              &nbsp;</span>
            </div>

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
