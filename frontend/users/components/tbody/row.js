'use strict';

import React from 'react';

export default class Row extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    render() {
        //onClick = {this.handleClickEdit}
        let {count, user:{_id, email}} = this.props;
        return(
            <tr>
              <th scope="row">{count}</th>
              <td>{email}</td>
              <td>
                  <a href={`/admin/users/${_id}`}
                     >
                      <button
                          type="button" className="btn btn-warning btn-row"
                      >
                          Edit
                      </button>
                    </a>
                  <button
                      type="button" className="btn btn-danger btn-row" data-toggle="modal" data-target={`#userModal${_id}`}
                  >
                      Delete
                  </button>

                    <div className="modal fade" id={`userModal${_id}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button className="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">A you sure delete user ?</h4>
                          </div>
                          <div className="modal-body">
                            {this.props.user.email}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button
                                type="button" className="btn btn-primary"
                                onClick = {this.handleClickDelete}
                            >
                                Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

              </td>
            </tr>
        );
    }

    handleClickEdit(event) {
        console.debug('handleClickEdit');
    }

    handleClickDelete(event) {
        const { user:{ _id } } = this.props;
        $(`#userModal${_id}`).modal('hide');
        this.props.handlerDeleteUser(_id);
    }
}
