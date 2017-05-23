import React, { Component } from 'react'
import moment from 'moment'
import { Image, Col, Row } from 'react-bootstrap'

import styles from './index.scss'

const Course = ({ course, navigateToUpdate, deleteCourse }) => {
	const startDate = moment(course.startDate).format('ll')
	return (
	<div className={styles.course_wrapper}>
		<Row>
			<Col xs={12} md={3}>
				<Image className={styles.course_image} src={!!course.image ? course.image: 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'} responsive />
			</Col>
			<Col xs={6} md={8}>
				<h3>{course.name}</h3>
				<p>Instructor: {course.instructor}</p>
				<p>Category: {course.category}</p>
				<p>Address: {course.address}</p>
				<p>Start Date: {startDate}</p>
			</Col>
			<Col xs={6} md={1}>
				<div className={styles.course_action}>
					<p className={styles.course_action_link}>
						<a href="" onClick={() => { navigateToUpdate(course._id) }}>Update</a>
					</p>
					<p className={styles.course_action_link}>
						<a href="" onClick={() => { deleteCourse(course._id) }}>Delete</a>
					</p>
				</div>
			</Col>
		</Row>
	</div>
	)
}

export default Course
