import { put, takeEvery } from 'redux-saga/effects'

import { createPost, deletePost, getPosts, updatePost } from '../api'
import { Post } from '../types'

import { postsActions } from './posts.slice'

// Worker Sagas
function* onGetPosts() {
  const posts: Post[] = yield getPosts()
  yield put(postsActions.fetchAllSucceeded(posts))
}

function* onCreatePost({ payload }: { type: typeof postsActions.create; payload: Post }) {
  yield createPost(payload)
  yield put(postsActions.fetchAll())
}

function* onUpdatePost({ payload }: { type: typeof postsActions.update; payload: Post }) {
  yield updatePost(payload)
  yield put(postsActions.fetchAll())
}

function* onDeletePost({ payload }: { type: typeof postsActions.delete; payload: Post }) {
  yield deletePost(payload)
  yield put(postsActions.fetchAll())
}

// Watcher Saga
export function* postsWatcherSaga() {
  yield takeEvery(postsActions.fetchAll.type, onGetPosts)
  yield takeEvery(postsActions.update.type, onUpdatePost)
  yield takeEvery(postsActions.delete.type, onDeletePost)
  yield takeEvery(postsActions.create.type, onCreatePost)
}

export default postsWatcherSaga
