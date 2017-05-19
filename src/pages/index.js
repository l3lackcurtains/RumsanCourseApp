import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../redux'
import { logoutUser } from '../redux/actions/userAc'
import Header from '../components/header'

@connect( state => ({ auth: state.auth }))
class Main extends Component {
	logOut(){
		store.dispatch(logoutUser())
	}
	render() {
		return (
		<div className="App">
			<Header auth={this.props.auth} logout={this.logOut}/>
			{ this.props.children }
		</div>
		)
	}
}

export default Main