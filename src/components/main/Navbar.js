import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary">
				<Link to={`/`} className="navbar-brand">
					Can I Make It?
				</Link>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to={`/profile`} className="nav-link">
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;