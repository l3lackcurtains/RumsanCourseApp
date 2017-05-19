import React, { Component } from 'react'
import { Image, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router'

import styles from './index.scss'

const Course = ({ course }) => {
	return(
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
				<p>Start Date: {course.startdate}</p>
			</Col>
			<Col xs={6} md={1}>
				<div className={styles.course_action}>
					<p className={styles.course_action_link}><Link to="/update-course">Update</Link></p>
					<p className={styles.course_action_link}><a>Delete</a></p>
				</div>
			</Col>
		</Row>
	</div>
	)
}

export default Course