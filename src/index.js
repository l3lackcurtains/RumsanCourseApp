import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from './redux'
import requireAuth from './utils/requireAuth'
import Main from './pages'
import login from './pages/login'
import register from './pages/register'
import course from './pages/course'
import addCourse from './pages/course/add'
import updateCourse from './pages/course/update'

// Sync route with redux stote
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={course} />
				<Route path="/login" component={login} />
				<Route path="/register" component={register} />
				<Route path="/add-course" component={requireAuth(addCourse)} />
				<Route path="/update-course" component={requireAuth(updateCourse)} />
			</Route>
		</Router>
	</Provider>
  , document.getElementById('root')
)
