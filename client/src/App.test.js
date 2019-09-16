import React from 'react';
import { render } from "@testing-library/react";
import App from './App';



test ('renders without crashing', () => {
  render(<App />);
});

test('renders "Top 100 Players" text', () => {
const {getByText} = render(<App />);

getByText("Top 100 Players");

});

test('button renders', () => {
const {getByText} = render(<App />);

getByText("Darkness");

});
