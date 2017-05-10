import React from 'react';
import PropTypes from 'prop-types';

// Conditional Rendering:
// Reference: https://facebook.github.io/react/docs/conditional-rendering.html
// Alternative way: Before return, define...
//   const periodItem = job.period ? <span>{job.period}</span> : null;
//   render periodItem inside return

class JobItem extends React.Component {

  render() {
    const item = this.props.job;
    return (
      <div>
        <span>{item.title}</span>
        <span> - </span>
        {
          item.url !== undefined
          ? <span><a href={item.url}>{item.org}</a></span>
          : <span>{item.org}</span>
        }
        {item.period !== undefined && <span> {item.period}</span>}
      </div>
    );
  }
}

JobItem.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    period: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default JobItem;
