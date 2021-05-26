import {cleanup, fireEvent, render, RenderResult} from '@testing-library/react';
import Menu, {MenuProps} from './menu';
import MenuItem from './menu-item';

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active </MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem> item 3 </MenuItem>
      {/*<div>4</div>*/}
    </Menu>
  );
};

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId('test-potion-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });

  it('should render correct Menu and MenuItem based on default props', function () {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('potion-menu test');
    expect(menuElement.getElementsByTagName('li').length).toEqual(3);
    expect(activeElement).toHaveClass('potion-menu-item is-active');
    expect(disabledElement).toHaveClass('potion-menu-item is-disabled');
  });

  it('click items should change active and call the right callback', function () {
    const thirdItem = wrapper.getByText('item 3');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith(2); // index=2
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  it('should render vertical mode when mode id set to vertical', function () {
    cleanup(); // 会找到重复的wrapper react-test-library在每个case(it)结束会自动清空
    const wrapper = render(generateMenu(testVerProps)); // 因为beforeEach里已经渲染过wrapper了
    const menuElement = wrapper.getByTestId('test-potion-menu');
    expect(menuElement).toHaveClass('potion-menu-vertical');
  });
});
