import { all, fork } from 'redux-saga/effects'

import { postsWatcherSaga } from 'features/posts/store/posts.sagas'

export function* rootSaga() {
  yield all([fork(postsWatcherSaga)])
}

export default rootSaga
