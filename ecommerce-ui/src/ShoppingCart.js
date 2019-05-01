import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <div className="col-25">
                <div className="container">
                    <h4>Cart</h4>
                    {/* {data.value} */}
                </div>
            </div>
        );
    }
}