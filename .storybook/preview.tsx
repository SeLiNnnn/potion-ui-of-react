import '../src/styles/index.scss';
import React from 'react';
import {addDecorator} from '@storybook/react';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

// 定义全局Decorator
const styles: React.CSSProperties = {
  textAlign: 'center'
};

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);
