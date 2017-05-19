import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './index.scss'

const Header = () => {
	return(
	<Navbar collapseOnSelect className={styles.header}>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Ramsan Course</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<Link to="/login">Login</Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}

export default Header