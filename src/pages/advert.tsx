import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class Advert extends Component {
  state = {
    items: [
      { id: 1, title: 'Refrigerators', imageUrl: '/image/AdvertiseHere.jpeg', link: '' },
    ],
    itemsToShow: 1, // Display one item at a time
  };

  componentDidMount() {
    // Determine the number of items to show based on screen size
    this.updateItemsToShow();
    window.addEventListener('resize', this.updateItemsToShow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateItemsToShow);
  }

  updateItemsToShow = () => {
    const isMobile = window.innerWidth <= 600;
    const itemsToShow = isMobile ? 1 : 8;
    this.setState({ itemsToShow });
  };

  render() {
    const { items, itemsToShow } = this.state;

    const itemStyle = {
      width: '712px', // Set the width to 712px
      height: '384px', // Set the height to 384px
      margin: '0 auto',
      textAlign: 'center',
      boxShadow: 'none',
      border: 'none',
      marginTop: '10px', // Adjust the top margin as desired
      transition: 'transform 0.3s ease', // Transition for hover effect
      transformOrigin: 'center bottom',
      borderRadius: '4px',
    };

    const hoveredItemStyle = {
      transform: 'translateY(-5px)', // Apply transform when hovered
    };

    const imageStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      objectFit: 'cover', // Ensure the image fills the container without distortion
    };

    const carouselContainerStyle = {
      width: '470px',
      height: '384px',
      marginTop: '-384px',
      background: '',
      paddingBottom: '8px',
      marginLeft: '940px',
      marginRight: '0px',
    };

    return (
      <div style={carouselContainerStyle}>
        <Carousel itemsToShow={itemsToShow} itemPadding={[0, 10]} pagination={true} showArrows={false}>
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  ...itemStyle,
                  ...(item.isHovered ? hoveredItemStyle : {}),
                }}
              >
                <img src={item.imageUrl} alt={item.title} style={imageStyle} />
                <div>{item.title}</div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Advert;
