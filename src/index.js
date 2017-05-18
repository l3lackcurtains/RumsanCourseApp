import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import main from './pages'
import login from './pages/login'
import register from './pages/register'
import cousre from './pages/course'
import addCourse from './pages/course/add'
import updateCourse from './pages/course/update'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
		<Router history={history}>
			<Route path="/" component={main}>
				<IndexRoute component={home}></IndexRoute>
				<Route path="/login" component={login}></Route>
				<Route path="/register" component={register}></Route>
        <Route path="/course" component={course}></Route>
        <Route path="course/add" component={addCourse}></Route>
        <Route path="course/update" component={updateCourse}></Route>
			</Route>
		</Router>
	</Provider>
  , document.getElementById('root')
)