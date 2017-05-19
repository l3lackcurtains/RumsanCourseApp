import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// Using high order function (HOC) for authorization
export default function(ComposedComponent) {
  @connect( state => ({ auth: state.auth }))
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.auth.isAuthenticated) {
        browserHistory.push({ pathname: '/login' })
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.isAuthenticated) {
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
