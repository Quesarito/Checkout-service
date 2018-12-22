import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
    };
  }

  render() {
    return (
      <header>
        <h1 className="nav">Amazon?</h1>
        <h1>
          <button class="openbtn"> ☰ </button>
        </h1>
      </header>
    );
  }
}
export default Nav;
