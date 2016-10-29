'use strict'

import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';

class Ammm extends React.Component {
    render() {
      return (
        <div>
          1000
        </div>
      );
    }
}

ReactDOM.render(<Ammm />, $('.test-react')[0]);

const main = new Main();

if (NODE_ENV == 'development') {
  let a = 100;
}


exports.main = main;
