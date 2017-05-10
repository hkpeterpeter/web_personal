import React from 'react';
import PropTypes from 'prop-types';

import JobItem from './JobItem';
import AwardItem from './AwardItem';
import MediaItem from './MediaItem';

class ExpPanelContent extends React.Component {
  render() {
    const exp = this.props.exp;
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
      <div >
        <p>{exp.description}</p>
        {exp.jobs !== undefined && <div><p>Job duties:</p><ul>{jobItems}</ul></div> }
        {exp.awards !== undefined && <div><p>Awards:</p><ul>{awardItems}</ul></div> }
        {exp.media !== undefined && <div><p>Media:</p><ul>{mediaItems}</ul></div> }
      </div>
    );
  }
}

ExpPanelContent.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.object),
    awards: PropTypes.arrayOf(PropTypes.object),
    media: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ExpPanelContent;
