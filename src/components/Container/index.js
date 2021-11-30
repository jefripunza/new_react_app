import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <React.StrictMode>
        {this.props.children}
      </React.StrictMode>
    )
  }
}
