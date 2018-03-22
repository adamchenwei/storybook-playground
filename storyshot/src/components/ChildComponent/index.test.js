import React from 'react';
import ChildComponent from './index';
import renderer from 'react-test-renderer';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

describe('ChildComponent Component', () => {
  test('renders as expected', () => {
    const tree = renderer.create(
      <ChildComponent />
    ).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
})