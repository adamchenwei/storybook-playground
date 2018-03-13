import { configure } from '@storybook/react';
const req = require.context('../src', true, /\.stories\.js$/);
// import initStoryshots from '@storybook/addon-storyshots';
// initStoryshots();

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
