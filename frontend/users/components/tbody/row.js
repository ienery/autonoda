'use strict';

import React from 'react';

export default class Row extends React.Component {
    render() {
        let {count, user:{_id, email}} = this.props;
        return(
            <tr>
              <th scope="row">{count}</th>
              <td>{email}</td>
              <td></td>
              <td></td>
            </tr>
        );
    }
}
