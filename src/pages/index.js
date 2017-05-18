import React, { Component } from 'react'

import Header from '../components/header'

class Main extends Component {
	render() {
		return (
		<div className="App">
			<Header />
			{ this.props.children }
		</div>
		)
	}
}

export default Main