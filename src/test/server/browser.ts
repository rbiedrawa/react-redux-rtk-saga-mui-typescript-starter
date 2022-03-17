import { setupWorker } from 'msw'

import { handlers } from 'test/server/handlers'

export const worker = setupWorker(...handlers)
