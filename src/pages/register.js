import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon, HelpBlock } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

import validateInput from '../validations/register'
import store from '../redux'
import { registerUser } from '../redux/actions/userAc'
import styles from './index.scss'

@connect( state => ({ register: state.register }))
class register extends Component {
  constructor(props) {
    super(props)
    // Initialize state for form submission and errors
    this.state = {
      email: '',
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      phone: '',
      address: '',
      errors: {},
      isLoading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  // On form submit method
  onSubmit(e) {
    e.preventDefault()
    const { errors, isValid } = validateInput(this.state)
    // Register User if values are valid
    if (isValid) {
      this.setState({ errors: {}, isLoading: true })
      store.dispatch(registerUser(this.state))
    } else {
      this.setState({ errors })
    }
  }

  // On Input field change method
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password, username, firstname, lastname, phone, address, errors, isLoading } = this.state
    const { register } = this.props

    // Redirect to home page if form submission is completed
    if(register.isReceived) {
      browserHistory.push({ pathname: '/' })
    }
    return (
    <div className={styles.register_wrapper}>
      <Grid className={styles.register_grid}>
        <Row>
          <h3 className={styles.title}>Register New User</h3>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
            <div className={styles.register_box} style={{ height: window.innerHeight-120 }}>
              <div className={styles.register} >
                <Form onSubmit={this.onSubmit}>
                  <FormGroup controlId="formInlineEmail" validationState={ !!errors.email ? 'error': null }>
                    <ControlLabel>Email *</ControlLabel>
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
                  <FormGroup controlId="formInlineUsername" validationState={ !!errors.username ? 'error': null }>
                    <ControlLabel>Username *</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      placeholder="jane_doe"
                      name="username"
                      value={username}
                      onChange={this.onChange}
                    />
                    <HelpBlock>{!!errors.username ? errors.username : ''}</HelpBlock>
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="formInlinePassword" validationState={ !!errors.password ? 'error': null }>
                    <ControlLabel>Password *</ControlLabel>
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
                  <FormGroup controlId="formInlineFirstName" validationState={ !!errors.firstname ? 'error': null }>
                    <ControlLabel>First name</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      placeholder="Jane"
                      name="firstname"
                      value={firstname}
                      onChange={this.onChange}
                    />
                    <HelpBlock>{!!errors.firstname ? errors.firstname : ''}</HelpBlock>
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="formInlineLastName" validationState={ !!errors.lastname ? 'error': null }>
                    <ControlLabel>Last name</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      placeholder="Doe"
                      name="lastname"
                      value={lastname}
                      onChange={this.onChange}
                    />
                    <HelpBlock>{!!errors.lastname ? errors.lastname : ''}</HelpBlock>
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="formInlinePhone" validationState={ !!errors.phone ? 'error': null }>
                    <ControlLabel>Phone</ControlLabel>
                    {' '}
                    <FormControl
                      type="number"
                      placeholder="+9779846583592"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                    <HelpBlock>{!!errors.phone ? errors.phone : ''}</HelpBlock>
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="formInlineAddress" validationState={ !!errors.address ? 'error': null }>
                    <ControlLabel>Address</ControlLabel>
                    {' '}
                    <FormControl
                      type="text"
                      placeholder="Pokhara, Nepal"
                      name="address"
                      value={address}
                      onChange={this.onChange}
                    />
                    <HelpBlock>{!!errors.address ? errors.address : ''}</HelpBlock>
                  </FormGroup>
                  {' '}
                  <Button type="submit">
                    <Glyphicon glyph="star" /> register
                  </Button>
                </Form>
                <div className={styles.register_nav}>
                  <p>Back to <Link to="/login">Login</Link>.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}

export default register