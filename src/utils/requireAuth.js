import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// Using high order function (HOC) for authorization
export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        browserHistory.push({ pathname: '/login' })
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        browserHistory.push({ pathname: '/' })
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
 return Authenticate
}
