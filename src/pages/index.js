import React, { Component } from 'react'

class main extends Component {
	render() {
		return (
		<div className="app">
		{ this.props.children }
		</div>
		)
	}
}

export default main