import React from 'react';
import airbnbs from './airbnbs.json';
import RentalItem from './RentalItem';

export default class RentalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inCart: [],
            newItem: ''
        };
    }

    addToCart = (idx) => {
        return (event) => {
            console.log("idx: " + idx);

            this.setState(prevState => {
                console.log("prevState: " + prevState);
    
                const newItem = {
                    value: prevState.newItem
                };
    
                console.log("state new item: " + this.state.newItem);
                console.log("state incart: " + this.state.inCart);
    
                return {
                    inCart: [...prevState.inCart, newItem],
                    newItem: ''
                };
            });
        }

    }

    // onChange = (event) => {
    //     const newItem = event.target.value;
    //     this.setState(prevState => {
    //         return {
    //             newItem: newItem
    //         };
    //     })
    // }

    render() {
        const listItems = airbnbs
            .map((d, k) => <RentalItem data={d} key={k} onClick={this.addToCart(k)} />);

        return (
            <div className='col-75'>
                <div className='container'>
                {/* <label>{this.state.inCart}</label> */}
                    {listItems}
                </div>
            </div>
        );
    }
}