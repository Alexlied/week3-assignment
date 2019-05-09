import React from 'react';
import ReactDOM from 'react-dom';
import RentalList from './RentalList';
import { rental1, rental2, rental3 } from './MockAirbnbs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RentalList rentals={[rental1, rental2, rental3]} onAddRental={() => { }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});