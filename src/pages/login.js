import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './index.scss'

class login extends Component {
  render() {
    return (
    <div className={styles.login_wrapper}>
      <Grid className={styles.login_grid}>
        <div className={styles.login_box} style={{ height: window.innerHeight-120 }}>
          <div className={styles.login} >
            <Form>
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>
                {' '}
                <FormControl type="email" placeholder="jane.doe@example.com" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePassword">
                <ControlLabel>Password</ControlLabel>
                {' '}
                <FormControl type="password" />
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