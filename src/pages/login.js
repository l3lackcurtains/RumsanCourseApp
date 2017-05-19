import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon, HelpBlock } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import validateInput from '../validations/login'
import store from '../redux'
import { loginUser } from '../redux/actions/userAc'
import styles from './index.scss'

@connect( state => ({ login: state.login }))
class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const { errors, isValid } = validateInput(this.state)
    if (isValid) {
      this.setState({ errors: {}, isLoading: true })
      store.dispatch(loginUser(this.state))
    } else {
      this.setState({ errors })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password, errors, isLoading } = this.state
    const { login } = this.props
    if(login.isReceived) {
      browserHistory.push({ pathname: '/' })
    }
    return (
    <div className={styles.login_wrapper}>
      <Grid className={styles.login_grid}>
        <div className={styles.login_box} style={{ height: window.innerHeight-120 }}>
          <div className={styles.login} >
            <Form onSubmit={this.onSubmit}>
              <FormGroup controlId="formInlineEmail" validationState={ !!errors.email ? 'error': null }>
                <ControlLabel>Email</ControlLabel>
                {' '}
                <FormControl
                  type="email"
                  placeholder="jane.doe@example.com"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.email ? errors.email : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePassword" validationState={!!errors.password ? 'error': null}>
                <ControlLabel>Password</ControlLabel>
                {' '}
                <FormControl
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.password ? errors.password : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <Button type="submit">
                <Glyphicon glyph="star" /> Login
              </Button>
            </Form>
            <div className={styles.login_nav}>
              <p>Not a member yet? <Link to="/register">Register Now</Link></p>
            </div>
          </div>
        </div>
      </Grid>
    </div>
    )
  }
}

export default login