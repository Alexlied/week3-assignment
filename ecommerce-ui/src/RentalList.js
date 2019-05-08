import React from 'react';
import RentalItem from './RentalItem';
import PropTypes from 'prop-types';

export default class RentalList extends React.Component {
    static propTypes = {
        rentals: PropTypes.array.isRequired
    }

    render() {
        const rentalList = this.props.rentals
            .map((rental, idx) => {
                return (
                    <RentalItem
                        idx={idx}
                        key={idx}
                        rental={rental}
                        onClick={this.props.onAddRental(idx)}
                    />
                );
            });

        return (
            <div className='col-75'>
                {/* 
                <div className="cart">
                    {this.state.inCart.map(item => {
                        return <p className="cart-item">{item.value.title} <span className="cart-cost">${item.value.payment.cost}</span></p>;
                    })}
                    <p className="cart-total">Total: <span className="cart-cost">${this.state.cartSum}</span></p>
                </div> */}
                <div className='container'>
                    {rentalList}
                </div>
            </div>
        );
    }
}