'use strict';

import React from 'react';

class Thead extends React.Component {
    render() {
        return(
            <thead className="thead-inverse">
                <tr>
                    <th>#</th>
                    <th>email</th>
                    <th>actions</th>
                </tr>
            </thead>
        );
    }
}

export default Thead;
