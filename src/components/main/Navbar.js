import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary">
				<Link to={`/`} className="navbar-brand">
					<FaUtensils />
				</Link>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
					<a href="login.html" className="nav-link">
							Profile
					</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;