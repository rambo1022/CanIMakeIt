import React, { Component } from 'react';

export class Sidebar extends Component {
	render() {
		return (
			<nav id="sidebar">
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="sidebar-header dropdown-toggle">My Stuff</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        
                    </ul>
                </li>
                
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="sidebar-header dropdown-toggle">Groceries</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        
                    </ul>
                </li>
				</ul>
            </nav>
		);
	}
}

export default Sidebar;