import React from 'react';
import _ from 'lodash';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: "click a button to examine the 'this' object"
    }
  }

  unbound = function() {
    if (this) {
      this.setState({properties: _.join(_.keys(this), ', ')});
    } else {
      this.setState({properties: "'this' is undefined"});
    }
  }

  bound = this.unbound.bind(this);

  arrow = () => {
    if (this) {
      this.setState({properties: _.join(_.keys(this), ', ')});
    } else {
      this.setState({properties: "'this' is undefined"});
    }
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <button onClick={() => this.setState({properties: 'click a button'})}>Reset</button>
        <br/>
        <br/>
        <button onClick={this.unbound}>Unbound function</button>
        <button onClick={this.bound}>Bound function</button>
        <button onClick={this.arrow}>Arrow function</button>
        <p>Object properties: {this.state.properties}</p>
      </div>
    )
  }
}