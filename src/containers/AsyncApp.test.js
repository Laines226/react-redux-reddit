import React from 'react';
import ReactDOM from 'react-dom';
import AsyncApp from './AsyncApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AsyncApp />, div);
});
