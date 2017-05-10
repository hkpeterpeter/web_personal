import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

class BasicProfile extends React.Component {
  render() {
    const profile = this.props.profile;
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={2} md={2} lg={2}>
            <Image
              className="center-block"
              responsive
              src={`assets/${profile.picture}`} alt={`${profile.firstName} ${profile.lastName} Profile`}
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
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
