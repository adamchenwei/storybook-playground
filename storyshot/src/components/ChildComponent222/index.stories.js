import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import ChildComponent222 from './index';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

storiesOf('Component/ChildComponent222/Stand Alone', module)
  .add('the default change', () => (
    <ChildComponent222 />
  ))
  .add('another change', () => (
    <ChildComponent222 message={'my thing'} />
  ))
