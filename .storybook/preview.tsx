/* eslint-disable */

import { Provider } from 'react-redux'
import { history, store } from 'store/store'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import React from 'react'

import i18n from 'config/i18n'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: { title: 'English', left: '🇺🇸' },
    pl: { title: 'Polish', left: '🇵🇱' },
  },
}

// Start mock service worker
const { worker } = require('../src/test/server/browser')
worker.start()
worker.printHandlers()

export const decorators = [
  (Story: any) => (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Story />
        </Router>
      </Provider>
    </>
  ),
]
