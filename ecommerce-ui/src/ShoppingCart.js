import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
    static propTypes = {
        rentalTotal: PropTypes.number.isRequired
    }

    render() {
        const rentalList = this.props.selected
            .map((rental, idx) => {
                return (
                    <div key={idx}>
                        <p className="cart-item">{rental.title} <span className="cart-cost">${rental.payment.cost}</span></p>
                        <button className="remove-button" onClick={() => this.props.onRemoveRental(idx)}>Remove</button>
                    </div>
                );
            });



        return (
            <div className="col-25">
                <div className="container">
                    {/* <div className="cart-title">Cart</div> */}
                    <div className="cart-contents">
                        {rentalList}
                        <div className="cart-total">Total: <span className="cart-cost">${this.props.rentalTotal}</span></div>
                    </div>


                </div>
            </div>
        );
    }
}