import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Nav from './components/Nav.jsx';
import Checkout from './components/Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dim: 0,
    };
  }


  render() {
    return (
      <div>
        <Nav />
        <Checkout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
