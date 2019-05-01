import React from 'react';
import airbnbs from './airbnbs.json';
import RentalItem from './RentalItem';

export default class RentalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inCart: [],
            newItem: '',
            cartSum: 0
        };
    }

    addToCart = (d, idx) => {
        return (event) => {
            this.setState(prevState => {
                const newItem = {
                    value: d
                };
                console.log("newItem: " + newItem.value);
                console.log("state new item: " + this.state.newItem);
                console.log("state incart: " + this.state.inCart);

                return {
                    inCart: [...prevState.inCart, newItem],
                    newItem: '',
                    cartSum: prevState.cartSum + newItem.value.payment.cost
                };
            });
        }

    }

    render() {
        const listItems = airbnbs
            .map((d, k) => <RentalItem data={d} key={k} onClick={this.addToCart(d, k)} />);

        return (
            <div className='col-75'>
                <div className='container'>
                    {listItems}
                </div>

                <div className="cart">
                    {this.state.inCart.map(item => {
                        return <p className="cart-item">{item.value.title} <span className="cart-cost">${item.value.payment.cost}</span></p>;
                    })}
                    <p className="cart-total">Total: <span className="cart-cost">${this.state.cartSum}</span></p>
                </div>
            </div>
        );
    }
}