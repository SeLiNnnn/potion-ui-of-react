import React, {createContext, useState} from 'react';
import classNames from 'classnames';
import MenuItem, {MenuItemProps} from './menu-item';

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenMenus?:string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenMenus
  } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenMenus
  };

  const classes = classNames('potion-menu', className, {
    'potion-menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  const renderChildren = () => {
    return React.Children.map(children, ((child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // return child;
        // 赋值index属性
        return React.cloneElement(childElement, {
          index: index.toString()
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    }));
  };

  return (
    <ul className={classes} style={style} data-testid="test-potion-menu">
      <MenuContext.Provider value={passedContext}>
        {/*{children}*/}
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenMenus: []
};

MenuItem.displayName = 'MenuItem';
export default Menu;
