import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap'

import styles from './index.scss'

class course extends Component {
  render() {
    return (
    <div className="course">
      <Grid>
        <Row className={styles.courses_box}>
          <Col xs={12} md={6}>
            Our Course Lists
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.course_action}>
              <Link to="/add-course">Add</Link>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}

export default course