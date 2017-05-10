import React from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Image,
} from 'react-bootstrap';

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

SlideShow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      evt: PropTypes.string,
      fn: PropTypes.string
    })
  ).isRequired,

};

export default SlideShow;
