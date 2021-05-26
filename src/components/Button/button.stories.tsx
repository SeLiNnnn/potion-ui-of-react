import Button, {ButtonProps, ButtonType} from './button';
import React from 'react';
import {Meta, Story} from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  btnType: ButtonType.Primary,
  children: 'Primary Button'
};


// const styles: React.CSSProperties = {
//   textAlign: 'center'
// };

// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

// const defaultButton = () => (
//   <Button onClick={action('clicked')}>default button </Button>
// );
//
// const buttonWithSize = () => (
//   <>
//     <Button size={ButtonSize.Large}> large button </Button>
//     <Button size={ButtonSize.Small}> small button </Button>
//   </>
// );
//
//
// const buttonWithType = () => (
//   <>
//     <Button btnType={ButtonType.Primary}> primary button </Button>
//     <Button btnType={ButtonType.Danger}> danger button </Button>
//     <Button btnType={ButtonType.Link} href="https://www.baidu.com"> link button </Button>
//   </>
// );
//
//
// storiesOf('Button Component', module)
//   // .addDecorator(CenterDecorator)
//   .add('默认 Button', defaultButton)
//   .add('不同尺寸的 Button', buttonWithSize)
//   .add('不同类型的 Button', buttonWithType);

