import React, { Component } from 'react'
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button, Form, Glyphicon, FieldGroup, HelpBlock } from 'react-bootstrap'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import validateInput from '../../validations/course'
import store from '../../redux'
import { addNewCourse } from '../../redux/actions/courseAc'
import { uploadRequest } from '../../redux/actions/upload'
import styles from './index.scss'

@connect( state => ({ addNewCourse: state.addNewCourse, upload: state.upload }))
class addCourse extends Component {
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

  // On form submit method
  onSubmit(e) {
    e.preventDefault()
    const { errors, isValid } = validateInput(this.state)
    // Add course if values are valid
    if (isValid) {
      this.setState({ errors: {}, isLoading: true })
      store.dispatch(addNewCourse(this.state))
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

  // After uploading image send path
  componentWillUpdate(nextProps, nextState){
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props) && nextProps.upload.isReceived) {
      const data = nextProps.upload.data
      //const imgUrl = process.env.NODE_ENV !== 'production' ? 'https://localhost:3000/files/':'https://rumsancourse.herokuapp.com/files/' + data.message.filename.filename
      this.setState({
        image: ''
      })
    }
  }

  render() {
    const { name, description, price, instructor, startdate, category, address, image, errors, isLoading } = this.state
    const { addNewCourse, upload } = this.props

    // Redirect to home page if form submission is completed
    if(addNewCourse.isReceived) {
      browserHistory.push({ pathname: '/' })
    }
    return (
    <div className={styles.course_wrapper}>
      <Grid className={styles.course_grid}>
        <Row>
          <h3 className={styles.title}>Add New Course</h3>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
            <div className={styles.course_box}>
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
                  <Button type="submit" disabled={isLoading}>
                    <Glyphicon glyph="star" /> Add Course
                    </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}

export default addCourse