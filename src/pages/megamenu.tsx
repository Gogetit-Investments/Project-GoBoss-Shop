import React, { useState } from "react";
import styled from "styled-components";
import { MenuItem, MenuList } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = createStyles({
  menuText: {
    fontSize: (props) => props.fontSize || "14px",
  },
});

function IconDropdown({ menuItems, classes, fontSize }) {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenSubMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenSubMenuIndex(null);
  };

  const handleClickOutside = () => {
    setOpenSubMenuIndex(null);
  };

  return (
    <DropdownContainer onMouseLeave={handleMouseLeave}>
      <MenuListStyled>
        {menuItems.map((item, i) => (
          <MenuItemStyled
            key={`menu-item-${i}`}
            onClick={item.onClick}
            classes={{ root: classes.menuItem }}
            fontSize={fontSize}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            {item.icon && <ListItemIconStyled>{item.icon}</ListItemIconStyled>}
            {item.content}
          </MenuItemStyled>
        ))}
      </MenuListStyled>
      {menuItems.map((item, i) => (
        <SubMenuContainer
          key={`submenu-container-${i}`}
          visible={openSubMenuIndex === i}
          onClick={handleClickOutside}
        >
          {item.submenu && (
            <SubMenuList>
              {item.submenu.map((subItem, j) => (
                <MenuItemStyled
                  key={`submenu-item-${j}`}
                  onClick={subItem.onClick}
                  classes={{ root: classes.menuItem }}
                  fontSize={fontSize}
                >
                  {subItem.icon && <ListItemIconStyled>{subItem.icon}</ListItemIconStyled>}
                  {subItem.content}
                </MenuItemStyled>
              ))}
            </SubMenuList>
          )}
        </SubMenuContainer>
      ))}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 0;
  z-index: 2;
  left: 28px;
  top: 10px;
  
  width: fit-content;
`;

const MenuListStyled = styled(MenuList)`
  background-color: white !important;
  width: 206px;
  height: 384px;
`;

const SubMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 208px;
  right: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const SubMenuList = styled(MenuList)`
  background-color: white !important;
  padding-left: 16px;
  padding-right: 16px;
  width: 712px;
  height: 384px !important;
`;

const MenuItemStyled = styled(MenuItem)`
  && {
    font-size: ${(props) => props.fontSize || "14px"};
    color: initial;
    &:hover {
      color: orange;
      background-color: white !important;
    }
  }
`;

const ListItemIconStyled = styled.div`
  margin-right: 10px;
  background-color: white !important;
`;

IconDropdown.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      content: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired,
      submenu: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.node,
          content: PropTypes.node.isRequired,
          onClick: PropTypes.func.isRequired,
        })
      ),
    })
  ).isRequired,
  classes: PropTypes.object.isRequired,
  fontSize: PropTypes.string,
};

export default withStyles(styles)(IconDropdown);
