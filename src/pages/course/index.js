import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import store from '../../redux'
import { fetchCourse } from '../../redux/actions/courseAc'
import styles from './index.scss'

@connect( state => ({ course: state.course }))
class course extends Component {
  componentWillMount() {
        store.dispatch(fetchCourse(this.props.source) )
    }
  render() {
    const { course } = this.props
    console.log(course)
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
        <Row>
          
        </Row>
      </Grid>
    </div>
    )
  }
}

export default course