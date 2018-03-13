import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import App from './App';

storiesOf('Component/App/Stand Alone', module)
  .add('the default change', () => (
    <App />
  ))
  .add('another change', () => (
    <App something={'everything'} />
  ))
