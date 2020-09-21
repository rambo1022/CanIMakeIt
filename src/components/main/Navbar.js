import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary">
				<Link to="/" className="navbar-brand">
					<FaUtensils /> Can I Make It?
				</Link>
				<div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
						<li className="navbar-item">
                        <Link to="/" className="nav-link">My Recipes</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/ingredients" className="nav-link">My Groceries</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/recipes" className="nav-link">New Recipes</Link>
                        </li>
                    </ul>
                </div>
			</nav>
		);
	}
}

export default Navbar;