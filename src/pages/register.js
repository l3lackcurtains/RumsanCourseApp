import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './index.scss'

class register extends Component {
  render() {
    return (
    <div className={styles.register_wrapper}>
      <Grid className={styles.register_grid}>
        <div className={styles.register_box} style={{ height: window.innerHeight-120 }}>
          <div className={styles.register} >
            <Form>
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email *</ControlLabel>
                {' '}
                <FormControl type="email" placeholder="jane.doe@example.com" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineUsername">
                <ControlLabel>Username *</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="jane_doe" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePassword">
                <ControlLabel>Password *</ControlLabel>
                {' '}
                <FormControl type="password" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineFirstName">
                <ControlLabel>First name</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Jane" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineLastName">
                <ControlLabel>Last name</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Doe" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePhone">
                <ControlLabel>Phone</ControlLabel>
                {' '}
                <FormControl type="number" placeholder="+9779846583592" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineAddress">
                <ControlLabel>Address</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Pokhara, Nepal" />
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
      </Grid>
    </div>
    )
  }
}

export default register