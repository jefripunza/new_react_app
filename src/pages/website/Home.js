import React, { Component } from 'react';

export default class Home extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    return <>ini Home</>;
  }
}
