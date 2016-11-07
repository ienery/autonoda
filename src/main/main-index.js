'use strict'

import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';

class Ammm extends React.Component {
    render() {
      return (
        <div>
          100000
        </div>
      );
    }
}

ReactDOM.render(<Ammm />, $('.test-react')[0]);

const main = new Main();

if (NODE_ENV == 'development') {
  let a = 100;
}

// BEGIN async/await

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
};

(async () => {
  console.log('a page');
  await sleep(1000);
  console.log('b page');
})();

// END async/await

exports.main = main;
