import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
class Header extends Component {
	render(){
		return(
		<Navbar collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">Ramsan Course</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={1}>
						<Link to="/login">Login</Link>
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		)
	}
}

export default Header