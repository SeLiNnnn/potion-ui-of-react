import React, {FunctionComponentElement, useContext, useState} from 'react';
import Menu, {MenuContext} from './menu';
import classNames from 'classnames';
import {MenuItemProps} from './menu-item';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({index, title, children, className}) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenMenus as Array<string>;
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('potion-menu-item potion-submenu-item', className, {
    'is-active': context.index === index
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {};
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouse(e, true);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouse(e, false);
    }
  } : {};

  const subMenuClasses = classNames('potion-submenu', {
    'menu-opened': menuOpen
  });
  const renderChildren = () => {

    const childrenComponent = React.Children.map(children, ((child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        });
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component');
      }
    }));
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
      // <ul className="potion-submenu">
      //   {childrenComponent}
      // </ul>
    );
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="potion-submenu-title" onClick={handleClick} {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
