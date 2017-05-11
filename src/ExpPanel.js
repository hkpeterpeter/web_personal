import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  Glyphicon,
} from 'react-bootstrap';

import './ExpPanel.css';

import JobItem from './JobItem';
import AwardItem from './AwardItem';
import MediaItem from './MediaItem';

class ExpPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ open: true });
  }

  mouseLeave() {
    this.setState({ open: false });
  }

  render() {
    const exp = this.props.exp;
    const header = (
      <div className="PointerCursor"><Glyphicon glyph={exp.icon} /> {exp.title}</div>
    );
    let jobItems = null;
    let awardItems = null;
    let mediaItems = null;

    if (exp.jobs !== undefined) {
      jobItems = exp.jobs.map((m, i) => <li key={i}><JobItem job={m} /></li>);
    }
    if (exp.awards !== undefined) {
      awardItems = exp.awards.map((m, i) => <li key={i}><AwardItem award={m} /></li>);
    }
    if (exp.media !== undefined) {
      mediaItems = exp.media.map((m, i) => <li key={i}><MediaItem media={m} /></li>);
    }
    return (
      <Panel
        header={header}
        collapsible
        expanded={this.state.open}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >

        <p>{exp.description}</p>
        {exp.jobs !== undefined && <div><p>Job duties:</p><ul>{jobItems}</ul></div> }
        {exp.awards !== undefined && <div><p>Awards:</p><ul>{awardItems}</ul></div> }
        {exp.media !== undefined && <div><p>Media:</p><ul>{mediaItems}</ul></div> }
        {exp.homepage !== undefined && <div><a href={exp.homepage}>Homepage</a></div> }

      </Panel>
    );
  }

}

ExpPanel.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.object),
    awards: PropTypes.arrayOf(PropTypes.object),
    media: PropTypes.arrayOf(PropTypes.object),
    homepage: PropTypes.string,
    icon: PropTypes.string.isRequired,
  }).isRequired,

};


export default ExpPanel;
