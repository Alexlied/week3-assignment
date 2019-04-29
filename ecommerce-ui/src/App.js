import React from 'react';
import './App.css';
import RentalList from './RentalList';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div className="row">
      <RentalList />
      <ShoppingCart />
    </div>
  );
}

export default App;
