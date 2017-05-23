import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import store from '../../redux'
import { fetchCourse, deleteSelectedCourse } from '../../redux/actions/courseAc'
import Course from '../../components/course'
import styles from './index.scss'

@connect( state => ({ course: state.course, deleteCourse: state.deleteCourse }))
class course extends Component {
  componentWillMount() {
      store.dispatch(fetchCourse())
  }

  navigateToUpdate(id) {
	   	browserHistory.push({pathname: '/update-course', query: { id } })
  }
  
  deleteCourse(id) {
    store.dispatch(deleteSelectedCourse(id)).then(() => store.dispatch(fetchCourse()))
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
              <Link to="add-course">Add</Link>
            </div>
          </Col>
          <Col>
            <div className={styles.course_list}>
              {!course.isReceived ?
                <p>...</p>
                :
                course.data.message.map((data, i) => <Course course={data} key={i} navigateToUpdate={this.navigateToUpdate} deleteCourse={this.deleteCourse}/>)
              }
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