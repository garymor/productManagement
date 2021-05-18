import React from 'react'
import ReactDom from 'react-dom'
import App from "./App"
const div = document.createElement('div');
it('renders without crashing', () => {
    const div = document.createElement('div'); // create the div here
    ReactDOM.render(<App />, div);
  });
