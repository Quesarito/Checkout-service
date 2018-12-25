import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
console.log('hereeeeee')

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
    };
  }

  componentDidMount() {
    axios.get('/carts').then((response) => {
      this.setState({cart: response.data });
    });

    axios.post('/carts', { userid: 1, itemid: 10 }).then((response) => {
      console.log('bingo');
    });
}

  render() {
    return (

      <div> f in chat </div>
    );
  }
}
export default Checkout;
