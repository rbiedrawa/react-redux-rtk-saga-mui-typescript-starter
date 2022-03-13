import React from 'react'
import {Provider} from 'react-redux'

import './App.css'
import {HistoryRouter as Router} from 'redux-first-history/rr6'
import {history, store} from './store/store'
import AppRoutes from './routes'

const App = () => (
  <>
    <Provider store={store}>
      <Router history={history}>
        <AppRoutes/>
      </Router>
    </Provider>
  </>
)

export default App
