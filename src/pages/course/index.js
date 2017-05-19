import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import store from '../../redux'
import { fetchCourse } from '../../redux/actions/courseAc'
import Course from '../../components/course'
import styles from './index.scss'

@connect( state => ({ course: state.course }))
class course extends Component {
  componentWillMount() {
      store.dispatch(fetchCourse(this.props.source) )
  }

  render() {
    const { course } = this.props
    return (
    <div className="course">
      <Grid>
        <Row className={styles.courses_box}>
          <Col xs={10} md={10}>
            Our Course Lists
          </Col>
          <Col xs={2} md={2}>
            <div className={styles.course_action}>
              <Link to="/add-course">Add</Link>
            </div>
          </Col>
          <Col>
            <div className={styles.course_list}>
              {!course.isReceived ? <p>No courses found</p> : course.data.message.map((data, i) => <Course course={data} key={i} />)}
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