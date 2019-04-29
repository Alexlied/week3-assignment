import React from 'react';
import PropTypes from 'prop-types';

export default class RentalItem extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
          }).isRequired
    }


    render() {
        const data = this.props.data;

        return (
            <div className='item' onClick={this.props.onClick}>
                <img className="item-picture" src={data.image} alt="Airbnb" />
                <div className='item-title'>{data.title}</div>
                <div className='item-houseType'>{data.houseType}</div>
                <div className='item-location'>{data.location.city}, {data.location.country}</div>
                <div className='item-payment'>${data.payment.cost} per night {data.payment.description ? ' - ' + data.payment.description : ""}</div>
                {/* <div className='item-rating'>{data.location.rating.stars}</div> */}
            </div>
        );

    }
}