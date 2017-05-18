import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid } from 'react-bootstrap'

// import './index.scss'

class course extends Component {
  render() {
    return (
    <div className="course">
      <Grid>
        <Col xs={12} md={6} />
          Welcome
        <Col>
        <Col xs={12} md={6} />
          <div className="course-action">
            <Link to="/add-course">Add</Link>
          </div>
        </Col>
      </Grid>
    </div>
    )
  }
}

export default course