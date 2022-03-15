import { SagaIterator } from '@redux-saga/core'
import { call, put, takeEvery } from 'redux-saga/effects'

import { createPost, deletePost, getPosts, updatePost } from '../api'
import { Post } from '../types'

import { postsActions } from './posts.slice'

// Worker Sagas
export function* onGetPosts(): SagaIterator {
  const posts: Post[] = yield call(getPosts)
  yield put(postsActions.fetchAllSucceeded(posts))
}

function* onCreatePost({
  payload,
}: {
  type: typeof postsActions.create
  payload: Post
}): SagaIterator {
  yield call(createPost, payload)
  yield put(postsActions.fetchAll())
}

function* onUpdatePost({
  payload,
}: {
  type: typeof postsActions.update
  payload: Post
}): SagaIterator {
  yield call(updatePost, payload)
  yield put(postsActions.fetchAll())
}

function* onDeletePost({
  payload,
}: {
  type: typeof postsActions.delete
  payload: Post
}): SagaIterator {
  yield call(deletePost, payload)
  yield put(postsActions.fetchAll())
}

// Watcher Saga
export function* postsWatcherSaga(): SagaIterator {
  yield takeEvery(postsActions.fetchAll.type, onGetPosts)
  yield takeEvery(postsActions.update.type, onUpdatePost)
  yield takeEvery(postsActions.delete.type, onDeletePost)
  yield takeEvery(postsActions.create.type, onCreatePost)
}

export default postsWatcherSaga
