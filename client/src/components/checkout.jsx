import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
console.log('hereeeeee')

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      cart: 0,
    };
  }

  componentDidMount() {
    axios.get('/carts').then((response) => {
      this.setState({cart: response.data });
    });

    axios.post('/carts', { userid: 1, itemid: 10 }).then((error, response) => {
      if (error) {
        throw error;
      }
      console.log('carts', response);
    });
    // list post test
    axios.post('/lists', { list_name: 'christmas', item_id: 1, user_id: 1 }).then((error, response) => {
      if (error) {
        throw error;
      }
      console.log('lists', response);
    });
  }

  render() {
    return (

      <div> f in chat </div>
    );
  }
}
export default Checkout;
