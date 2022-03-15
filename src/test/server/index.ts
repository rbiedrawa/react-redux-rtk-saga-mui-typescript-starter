/* eslint-disable global-require, @typescript-eslint/no-var-requires */

import Env from '../../config/Env'

export const initMockServiceWorker = () => {
  if (Env.isMswEnabled()) {
    const { worker } = require('./browser')
    worker.start()
  }
}
