import React from 'react';
import PropTypes from 'prop-types';

class AwardItem extends React.Component {
  render() {
    const item = this.props.award;
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
        {item.country !== undefined && <span>, {item.country}</span>}
      </div>
    );
  }
}

AwardItem.propTypes = {
  award: PropTypes.shape({
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    period: PropTypes.string,
    url: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default AwardItem;
