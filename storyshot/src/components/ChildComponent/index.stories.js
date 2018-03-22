import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import ChildComponent from './index';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

storiesOf('Component/ChildComponent/Stand Alone', module)
  .add('the default change', () => (
    <ChildComponent />
  ))
  .add('another change', () => (
    <ChildComponent message={'my thing'} />
  ))
