import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon, FieldGroup } from 'react-bootstrap'
import styles from './index.scss'

class addCourse extends Component {
  render() {
    return (
    <div className={styles.course_wrapper}>
      <Grid className={styles.course_grid}>
        <div className={styles.course_box} style={{ height: window.innerHeight-120 }}>
          <div className={styles.course} >
            <Form>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Course Name *</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Python Programming" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineDesc">
                <ControlLabel>Description *</ControlLabel>
                {' '}
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePrice">
                <ControlLabel>Price (Nrs)</ControlLabel>
                {' '}
                <FormControl type="number" placeholder="5000" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineInstructor">
                <ControlLabel>Instructor</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Jane" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineStartDate">
                <ControlLabel>Start Date</ControlLabel>
                {' '}
                <FormControl type="date" placeholder="May 1" />
              </FormGroup>             
              {' '}
              <FormGroup controlId="formInlineCategory">
                <ControlLabel>Category</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Programming" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineAddress">
                <ControlLabel>Address</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Kathmandu, Nepal" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineImage">
                <ControlLabel>Image</ControlLabel>
                {' '}
                <FormControl type="file" />
              </FormGroup>
              {' '}
              <Button type="submit">
                <Glyphicon glyph="star" /> Add Course
                </Button>
            </Form>
          </div>
        </div>
      </Grid>
    </div>
    )
  }
}

export default addCourse