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
                <div className='container'>
                    {rentalList}
                </div>
            </div>
        );
    }
}