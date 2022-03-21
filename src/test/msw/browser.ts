import { setupWorker } from 'msw'

import { handlers } from 'test/msw/handlers'

export const worker = setupWorker(...handlers)
