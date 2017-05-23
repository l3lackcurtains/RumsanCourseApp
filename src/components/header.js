import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './index.scss'

const Header = ({ auth, logout }) => (
	<Navbar collapseOnSelect className={styles.header}>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Rumsan Course</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<div className={styles.header_navs}>
					{
					auth.isAuthenticated ? <a onClick={logout} href="">Logout</a>
					:
					<Link to="/login">Login</Link>
					}
				</div>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)

export default Header
