import { setupServer } from 'msw/node'

import { handlers } from 'test/server/handlers'

export const server = setupServer(...handlers)
