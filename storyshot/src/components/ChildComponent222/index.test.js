import React from 'react';
import ChildComponent222 from './index';
import renderer from 'react-test-renderer';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

describe('ChildComponent222 Component', () => {
  test('renders as expected', () => {
    const tree = renderer.create(
      <ChildComponent222 />
    ).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
})