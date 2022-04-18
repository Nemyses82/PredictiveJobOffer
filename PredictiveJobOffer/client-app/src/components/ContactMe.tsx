import React, { Component } from 'react';

export class ContactMe extends Component {
	static displayName = ContactMe.name;

	render() {
		return (
			<div>
				<div className="contactme hidden-xs">
					<a href="page-contact.html">
						<img src="/upload/me.jpg" className="img-circle" alt="" data-toggle="tooltip" data-placement="top" title="Need Help?" />
						<span className="oi" data-glyph="chat"></span>
					</a>
				</div>
			</div>
		);
	}
}