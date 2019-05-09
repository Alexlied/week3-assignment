import React from 'react';
import './App.css';
import RentalList from './RentalList';
import ShoppingCart from './ShoppingCart';
import airbnbs from './airbnbs.json';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rentals: airbnbs,
            selectedRentals: [],
            rentalTotal: 0
        }
    }

    addRental = (idx) => {
        return () => {
            const selectedRental = this.state.rentals[idx];
            const isASelectedRental = this.state.selectedRentals.includes(selectedRental)
            if (isASelectedRental) {
                alert('You already selected that rental.');
            } else {
                let currentRentalCost = this.state.rentalTotal + selectedRental.payment.cost;

                this.setState(prevState => {
                    return {
                        selectedRentals: [...prevState.selectedRentals, selectedRental],
                        rentalTotal: currentRentalCost
                    };
                });
            }
        }
    }

    removeRental = (idx) => {
        const selectedRental = this.state.selectedRentals[idx];
        const updatedSelectedRentals = [...this.state.selectedRentals];
        updatedSelectedRentals.splice(idx, 1);
        const updatedRentalTotal = this.state.rentalTotal - selectedRental.payment.cost;

        this.setState({
            selectedRentals: updatedSelectedRentals,
            rentalTotal: updatedRentalTotal
        });
    }

    render() {
        return (
            <div className="row">
                <RentalList rentals={this.state.rentals} onAddRental={this.addRental} />
                <ShoppingCart selected={this.state.selectedRentals} onRemoveRental={this.removeRental} rentalTotal={this.state.rentalTotal} />
            </div>
        );
    }
}
