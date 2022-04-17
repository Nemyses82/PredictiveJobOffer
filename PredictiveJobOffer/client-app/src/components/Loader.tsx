import React, { Component } from 'react';

export class Loader extends Component {
	static displayName = Loader.name;

	render() {
		return (
			<div>
				<div className="cssload-container">
					<div className="cssload-loader"></div>
				</div>
			</div>
		);
	}
}