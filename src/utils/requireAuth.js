import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from '../actions/flashMessages'

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You are not authorized to see this page.'
        })
        this.context.router.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/')
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

 function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate)
}
