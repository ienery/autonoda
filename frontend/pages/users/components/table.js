'use strict'

import React from 'react';

import Thead from './thead';
import Tbody from './tbody';

class Table extends React.Component {
    render() {
        return(
            <table className="table table-striped table-bordered table-hover table-sm">
                <Thead />
                <Tbody />
            </table>
        );
    }
}

export default Table;
