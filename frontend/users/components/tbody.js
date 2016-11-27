'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Row from './tbody/row';

import { deleteUser } from '../actions/users-actions';

class Tbody extends React.Component {
    render() {
        //console.debug(this.props);

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
                            handlerDeleteUser = {this.props.deleteUser}
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser(_id) {
            dispatch(deleteUser(_id));
        }
    }
}

Tbody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tbody);

export default Tbody;
