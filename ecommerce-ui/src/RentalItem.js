import React from 'react';
import PropTypes from 'prop-types';

export default class RentalItem extends React.Component {
    static propTypes = {
        rental: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired
            }),
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired
            }),
            host: PropTypes.shape({
                name: PropTypes.string.isRequired,
                isSuperhost: PropTypes.bool.isRequired
            }),
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired
            })
          }).isRequired
    }


    render() {
        const rental = this.props.rental;

        //const {rental, onClick, idx, buttonText} = this.props;

        return (
            <div className='item' onClick={this.props.onClick}>
                <img className="item-picture" src={rental.image} alt="Airbnb" />
                <div className='item-title'>{rental.title}</div>
                <div className='item-houseType'>{rental.houseType}</div>
                <div className='item-location'>{rental.location.city}, {rental.location.country}</div>
                <div className='item-payment'>${rental.payment.cost} per night {rental.payment.description ? ' - ' + rental.payment.description : ""}</div>
                {/* <div className='item-rating'>{rental.location.rating.stars}</div> */}
            </div>
        );

    }
}