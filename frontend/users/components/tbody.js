'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Row from './tbody/row';

class Tbody extends React.Component {
    render() {
        //console.debug(this.props.users);

        return(
            <tbody>
                {this.props.users.map((...options) => {
                    let [item, index] = options;
                    let count = index + 1;
                    return(
                        <Row
                            key = {index}
                            user = {item}
                            count = {count}
                        />
                    );
                })}
          </tbody>
        );
    }

}

const mapStateToProps = (state) => {
    const {users} = state;
    return { users };
}

Tbody = connect(
    mapStateToProps
)(Tbody);

export default Tbody;
