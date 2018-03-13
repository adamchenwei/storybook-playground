import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

describe('App Component', () => {
  test('renders as expected', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
})