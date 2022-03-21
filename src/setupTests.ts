import '@testing-library/jest-dom'

import { clearDb } from 'test/msw/db'
import { server } from 'test/msw/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

// general cleanup
afterEach(async () => {
  clearDb()
})
