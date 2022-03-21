import { setupServer } from 'msw/node'

import { handlers } from 'test/msw/handlers'

export const server = setupServer(...handlers)
