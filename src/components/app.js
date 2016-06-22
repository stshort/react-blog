import React, { Component } from 'react';

export default class App extends Component {
  render() {
  	// In order to display children Routes, use this.props.children
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
