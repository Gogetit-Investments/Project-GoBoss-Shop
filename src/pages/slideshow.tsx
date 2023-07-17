import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IconDropdown from './megamenu';
import { FaTractor, FaBatteryFull, FaCar, FaTshirt, FaTable, FaApple, FaBreadSlice, FaShoppingCart, FaBuilding, FaServicestack, FaDotCircle, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const DemoCarousel: React.FC = () => {
  const containerRef = useRef(null);

  const menuItems = [
    // {
    //   icon: <FaHome />,
    //   content: "Home",
    //   onClick: () => {
    //     // Handle click event for Home menu item
    //   },
    // },
    {
      icon: <FaTractor />,
      content: "Agriculture",
      onClick: () => {
        // Handle click event for Agriculture menu item
      },
      submenu: [
        {
          icon: null,
          content: "Farm implements",
          onClick: () => {
            // Handle click event for Submenu 1
          },
        },
        {
          icon: null,
          content: "Crops",
          onClick: () => {
            // Handle click event for Submenu 2
          },
        },
      ],
    },

    {
      icon: <FaBatteryFull />,
      content: "Electronics",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Fan",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Generator",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },

    {
      icon: <FaCar />,
      content: "Automobile Spare Parts",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "KIA",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Honda",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
        {
          icon: null,
          content: "Toyota",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
        {
          icon: null,
          content: "Mercedes",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },

    {
      icon: <FaTshirt />,
      content: "Fashion",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Men",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Women",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },

        {
          icon: null,
          content: "Children",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },

    {
      icon: <FaTable />,
      content: "Furnitures",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Tables",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Chairs",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },


    {
      icon: <FaApple />,
      content: "Consumer Goods",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Garri",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Beans",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },


    {
      icon: <FaBreadSlice />,
      content: "Catering & Confectionaries",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Bread",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Chocolates",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },

    {
      icon: <FaShoppingCart />,
      content: "Village Markets",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Wuse Market",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Garki Market",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },

        {
          icon: null,
          content: "Nyanya Market",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },

        {
          icon: null,
          content: "Jabi Market",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },

    {
      icon: <FaBuilding />,
      content: "Building Materials",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Ladder",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Roofing sheet",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },

    {
      icon: <FaServicestack />,
      content: "Services",
      onClick: () => {
        // Handle click event for Settings menu item
      },
      submenu: [
        {
          icon: null,
          content: "Professionals",
          onClick: () => {
            // Handle click event for Submenu 3
          },
        },
        {
          icon: null,
          content: "Artisans",
          onClick: () => {
            // Handle click event for Submenu 4
          },
        },
      ],
    },
  ];



  return (
    <Container>
      <HamburgerButton>
        <FaBars />
      </HamburgerButton>
      <ContentContainer ref={containerRef}>
        <MenuWrapper>
          <CloseButton>
            <FaTimes />
          </CloseButton>
          <IconDropdown menuItems={menuItems} fontSize="13px" />
        </MenuWrapper>
        <CarouselContainer>
          <Carousel showThumbs={false} autoPlay={true}>
            <div>
              <img src="https://ng.jumia.is/cms/0-1-cpr/2023/large-item-updated/design-update/Desktop_Homepage_Slider__712x384.png" alt="Carousel Image 1" />
            </div>
            <div>
              <img src="https://ng.jumia.is/cms/0-6-anniversary/2023/initiatives/712x384.gif" alt="Carousel Image 2" />
            </div>
          </Carousel>
        </CarouselContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    background-color: white;
    top: 35px;
    left: 0;
    padding: 10px;
    z-index: 9999;
    width: 100%;
    max-height: calc(100vh - 35px);
    overflow-y: auto;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 5px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 712px;
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 5px;
`;

export default DemoCarousel;

  