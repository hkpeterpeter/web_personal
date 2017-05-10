import React from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Image,
} from 'react-bootstrap';

// React:
// The key is used by React to identify which items have changed, are added,
// or are removed and should be stable.
//  https://facebook.github.io/react/docs/lists-and-keys.html#keys

class SlideShow extends React.Component {
  render() {
    const carouselItemsInstance = this.props.items.map((item, index) => (
      <Carousel.Item key={index}>
        <Image className="center-block" src={`slideshow_images/${item.fn}`} responsive alt={item.evt} />
        <Carousel.Caption>
          <h3>{item.evt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ));
    return (
      <Carousel wrap indicators={false} className="Carousel" >
        {carouselItemsInstance}
      </Carousel>
    );
  }
}

// Typechecking With PropTypes
// Note: React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html

SlideShow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      evt: PropTypes.string.isRequired,
      fn: PropTypes.string.isRequired,
    })
  ).isRequired,

};

export default SlideShow;
