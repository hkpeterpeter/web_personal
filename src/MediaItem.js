import React from 'react';
import PropTypes from 'prop-types';

class MediaItem extends React.Component {
  render() {
    const item = this.props.media;
    return (
      <div>
        <span>{item.date}</span>
        <span> : </span>
        {
          item.url !== undefined
          ? <span><a href={item.url}>{item.publisher}</a></span>
          : <span>{item.publisher}</span>
        }
      </div>
    );
  }
}

MediaItem.propTypes = {
  media: PropTypes.shape({
    publisher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default MediaItem;
