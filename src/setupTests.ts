import '@testing-library/jest-dom'

import { clearDb } from './test/server/db'
import { server } from './test/server/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

// general cleanup
afterEach(async () => {
  clearDb()
})
