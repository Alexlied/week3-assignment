import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './ShoppingCart';
import { rental1, rental2, rental3 } from './MockAirbnbs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingCart selected={[rental1, rental2, rental3]} onRemoveRental={() => { }} rentalTotal={100} />, div);
  ReactDOM.unmountComponentAtNode(div);
});