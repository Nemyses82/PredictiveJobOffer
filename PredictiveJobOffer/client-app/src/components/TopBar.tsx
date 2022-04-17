import React, { Component } from 'react';

export class TopBar extends Component {
    static displayName = TopBar.name;

    render() {
        return (
            <div>
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 center-xs">
                                <p className="topbar-text">
                                    <strong><i className="fa fa-phone"></i></strong> +90 987 123 45 67 &nbsp;&nbsp;
                                    <strong><i className="fa fa-envelope-o"></i></strong> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                </p>
                            </div>

                            <div className="col-md-6 col-sm-12 center-xs text-right">
                                <div className="social-topbar">
                                    <ul className="list-inline social-small">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}