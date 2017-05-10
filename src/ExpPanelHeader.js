import React from 'react';
import PropTypes from 'prop-types';
import {
  Glyphicon,
} from 'react-bootstrap';


import './App.css';

class ExpPanelHeader extends React.Component {

  render() {
    const title = this.props.title;
    const icon = this.props.icon;
    return (
      <div><Glyphicon glyph={icon} /> {title}</div>
    );
  }
}

ExpPanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

ExpPanelHeader.defaultProps = {
  icon: 'star',
};

export default ExpPanelHeader;
