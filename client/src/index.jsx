import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Nav from './components/Nav.jsx';
import Checkout from './components/Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dim: 0,
    };
  }

  dimscreen() {
    this.setState({
      dim: 1
    });
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
