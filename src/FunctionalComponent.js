import React from 'react';
import _ from 'lodash';

export default () => {
  let properties = this
    ? _.join(_.keys(this), ', ')
    : "'this' is undefined in the functional component";

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Object properties: {properties}</p>
    </div>
  )
}