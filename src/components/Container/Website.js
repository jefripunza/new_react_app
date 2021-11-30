import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    return (
      <React.StrictMode>
        yes <br />
        {this.props.children}
      </React.StrictMode>
    );
  }
}
