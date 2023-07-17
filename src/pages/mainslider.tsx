import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class MainSlider extends Component {
  state = {
    items: [
      { id: 1, title: 'Refrigerators', imageUrl: 'https://ng.jumia.is/cms/0-1-cpr/2023/large-item-updated/design-update/Desktop_Homepage_Slider__712x384.png', link: 'https://example.com' },
      { id: 2, title: 'Refrigerators', imageUrl: 'https://ng.jumia.is/cms/0-6-anniversary/2023/initiatives/712x384.gif', link: 'https://example.com' },
    ],
    itemsToShow: 1, // Display one item at a time
    activeItemIndex: 0, // Index of the currently active item
  };

  carouselRef = React.createRef(); // Reference to the Carousel component

  componentDidMount() {
    this.updateItemsToShow();
    window.addEventListener('resize', this.updateItemsToShow);
    this.startInterval();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateItemsToShow);
    clearInterval(this.interval);
  }

  updateItemsToShow = () => {
    const itemsToShow = window.innerWidth <= 800 ? 1 : 8;
    this.setState({ itemsToShow });
  };

  startInterval = () => {
    this.interval = setInterval(this.changeSlider, 5000);
  };

  changeSlider = () => {
    const { items, activeItemIndex } = this.state;
    const nextIndex = (activeItemIndex + 1) % items.length;
    this.carouselRef.current.goTo(nextIndex, true);
  };

  handleSliderChange = (currentItemIndex) => {
    this.setState({ activeItemIndex: currentItemIndex });
  };

  render() {
    const { items, itemsToShow, activeItemIndex } = this.state;

    if (window.innerWidth < 800) {
      return null; // Hide the component if the device width is less than 800
    }

    const itemStyle = {
      width: '712px',
      height: '384px',
      margin: '0 auto',
      textAlign: 'center',
      boxShadow: 'none',
      border: 'none',
      marginTop: '10px',
      transition: 'transform 0.3s ease',
      transformOrigin: 'center bottom',
      borderRadius: '4px',
    };

    const hoveredItemStyle = {
      transform: 'translateY(-5px)',
    };

    const imageStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      objectFit: 'cover',
    };

    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '712px' }}>
          <Carousel
            ref={this.carouselRef}
            itemsToShow={itemsToShow}
            itemPadding={[0, 10]}
            pagination={false}
            showArrows={false}
            onChange={this.handleSliderChange}
            renderPagination={({ pages, activePage }) => (
              <div style={{ textAlign: 'center' }}>
                {pages.map((page) => (
                  <button
                    key={page}
                    style={{
                      width: '10px',
                      height: '10px',
                      margin: '0 5px',
                      borderRadius: '50%',
                      backgroundColor: page === activePage ? 'orange' : 'gray',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            )}
          >
            {items.map((item, index) => (
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
                    ...(activeItemIndex === index ? hoveredItemStyle : {}),
                  }}
                >
                  <img src={item.imageUrl} alt={item.title} style={imageStyle} />
                  <div>{item.title}</div>
                </div>
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MainSlider;
