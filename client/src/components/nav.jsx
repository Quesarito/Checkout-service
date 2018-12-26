import React from 'react';
import axios from 'axios';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      cart: 0,
    };
  }

  componentDidMount() {
    axios.get('/users').then((response) => {
      this.setState({data: response.data });
    });
  }

  render() {
    return (
      <header>
        <h1 className="nav">Amazon?</h1>
        <h1>
          <button className="openbtn"> ☰ </button>
        </h1>
      </header>
    );
  }
}
export default Nav;
