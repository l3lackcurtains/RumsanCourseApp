import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon, FieldGroup, HelpBlock } from 'react-bootstrap'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import validateInput from '../../validations/course'
import store from '../../redux'
import { updateSelectedCourse, fetchCourseById } from '../../redux/actions/courseAc'
import { uploadRequest } from '../../redux/actions/upload'
import styles from './index.scss'

@connect( state => ({ updateCourse: state.updateCourse, upload: state.upload, courseById: state.courseById }))
class updateCourse extends Component {
  constructor(props) {
    super(props)
    // Initialize state for form submission and errors
    this.state = {
      name: '',
      description: '',
      price: '',
      instructor: '',
      startdate: '',
      category: '',
      address: '',
      image: '',
      errors: {},
      isLoading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
  }

   componentWillMount() {
    const id = this.props.location.query.id
    store.dispatch(fetchCourseById(id))
  }
  // On form submit method
  onSubmit(e) {
    e.preventDefault()
    const { errors, isValid } = validateInput(this.state)
    // Update course if values are valid
    if (isValid) {
      this.setState({ errors: {}, isLoading: true })
      const id = this.props.location.query.id
      store.dispatch(updateSelectedCourse(id, this.state))
    } else {
      this.setState({ errors })
    }
  }

  // On Input field change method
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // On changes on upload field, Upload the image to server
  handleFileUpload(e) {
    e.preventDefault()
    const file = e.target.files[0]
    store.dispatch(uploadRequest({ file, name: 'image' }))
  }

  componentWillUpdate(nextProps, nextState){
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props) && nextProps.courseById !== 'undefined' && typeof(nextProps.courseById) !== 'undefined') {
      const data = nextProps.courseById.data.message
      this.setState({
        name: data.name,
        description: data.description,
        price: data.price,
        instructor: data.instructor,
        startdate: data.startdate,
        category: data.category,
        address: data.address
      })
    }
  }

  render() {
    const { name, description, price, instructor, startdate, category, address, image, errors, isLoading } = this.state
    const { updateCourse, upload, courseById } = this.props

    // Redirect to home page if form submission is completed
    if(updateCourse.isReceived) {
      browserHistory.push({ pathname: '/' })
    }
    return (
    <div className={styles.course_wrapper}>
      <Grid className={styles.course_grid}>
        <div className={styles.course_box} style={{ height: window.innerHeight-120 }}>
          <div className={styles.course} >
            <Form onSubmit={this.onSubmit}>
              <FormGroup controlId="formInlineName" validationState={ !!errors.name ? 'error': null }>
                <ControlLabel>Course Name *</ControlLabel>
                {' '}
                <FormControl
                  type="text"
                  placeholder="Python Programming"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.name ? errors.name : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineDesc" validationState={ !!errors.description ? 'error': null }>
                <ControlLabel>Description *</ControlLabel>
                {' '}
                <FormControl
                  componentClass="textarea"
                  placeholder="textarea"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.description ? errors.description : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlinePrice" validationState={ !!errors.price ? 'error': null }>
                <ControlLabel>Price (Nrs)</ControlLabel>
                {' '}
                <FormControl
                  type="number"
                  placeholder="5000"
                  name="price"
                  value={price}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.price ? errors.price : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineInstructor" validationState={ !!errors.instructor ? 'error': null }>
                <ControlLabel>Instructor</ControlLabel>
                {' '}
                <FormControl
                  type="text"
                  placeholder="Jane"
                  name="instructor"
                  value={instructor}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.instructor ? errors.instructor : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineStartdate" validationState={ !!errors.startdate ? 'error': null }>
                <ControlLabel>Start Date</ControlLabel>
                {' '}
                <FormControl
                  type="date"
                  name="startdate"
                  value={startdate}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.startdate ? errors.startdate : ''}</HelpBlock>
              </FormGroup>             
              {' '}
              <FormGroup controlId="formInlineCategory" validationState={ !!errors.category ? 'error': null }>
                <ControlLabel>Category</ControlLabel>
                {' '}
                <FormControl
                  type="text"
                  placeholder="Programming"
                  name="category"
                  value={category}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.category ? errors.category : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineAddress" validationState={ !!errors.address ? 'error': null }>
                <ControlLabel>Address</ControlLabel>
                {' '}
                <FormControl
                  type="text"
                  placeholder="Kathmandu, Nepal"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                />
                <HelpBlock>{!!errors.address ? errors.address : ''}</HelpBlock>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineImage">
                <ControlLabel>Image</ControlLabel>
                {' '}
                <FormControl
                  type="file"
                  onChange={this.handleFileUpload}
                />
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

export default updateCourse