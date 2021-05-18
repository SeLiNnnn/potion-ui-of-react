import {fireEvent, render} from '@testing-library/react';
import Button, {ButtonProps, ButtonSize, ButtonType} from './button';

const defaultProps = {
  onClick: jest.fn()
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};

// 分类
describe('test Button component', () => {
  it('should render the correct default button', function () {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>); // 添加点击事件
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toBe('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);// 触发点击
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render the correct component based on different props', function () {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn btn-primary btn-lg klass');
  });

  it('should render a link when btnType equals link and href is provided', function () {
    const wrapper = render(<Button btnType={ButtonType.Link} href="https:www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass('btn btn-link');
  });

  it('should render disabled button when disabled set to true', function () {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
