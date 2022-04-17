import React, { Component } from 'react';

export class LoginModal extends Component {
    static displayName = LoginModal.name;

    render() {
        return (
            <div>
                <div className="modal fade" id="loginmodal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close closebtn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <div className="modal-body">
                                <div className="widget clearfix">
                                    <div className="post-padding item-price">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="content-title">
                                                    <h4><i className="fa fa-lock"></i> Login Account</h4>
                                                </div>

                                                <form id="submit" className="submit-form">
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12">
                                                            <input type="text" className="form-control" placeholder="Username or Email" />
                                                            <input type="password" className="form-control" placeholder="*******" />
                                                            <button className="btn btn-primary">Login</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="content-title">
                                                    <h4>No have account?</h4>
                                                </div>

                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                                <a href="#" className="btn btn-custom">Register Account</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}