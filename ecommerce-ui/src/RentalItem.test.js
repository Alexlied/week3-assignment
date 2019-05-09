import React from 'react';
import ReactDOM from 'react-dom';
import RentalItem from './RentalItem';
import { rental1 } from './MockAirbnbs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RentalItem
    idx={1}
    key={1}
    rental={rental1}

  />, div);
  ReactDOM.unmountComponentAtNode(div);
});