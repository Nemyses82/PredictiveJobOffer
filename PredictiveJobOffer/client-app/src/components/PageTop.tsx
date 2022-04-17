import React, { Component } from 'react';

export class PageTop extends Component {
    static displayName = PageTop.name;

    render() {
        return (
            <div>
                <div className="dmtop"><i className="fa fa-angle-up"></i></div>
            </div>
        );
    }
}