import { nanoid } from '@reduxjs/toolkit'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga-test-plan/matchers'

import { getPosts } from '../../api'
import { Post } from '../../types'
import { onGetPosts } from '../posts.sagas'
import postsReducer, { postsActions } from '../posts.slice'

const expectedSagaPosts: Post[] = [{ id: '1', title: 'saga-test-example', body: nanoid() }]

describe('Saga - test examples', () => {
  it('should execute commands in exact order with redux-saga-test-plan', async () =>
    testSaga(onGetPosts)
      .next()
      .call(getPosts)
      .next(expectedSagaPosts)
      .put(postsActions.fetchAllSucceeded(expectedSagaPosts))
      .next()
      .isDone())

  it('should mock external api with .provide()', () =>
    expectSaga(onGetPosts)
      .provide([[call(getPosts), expectedSagaPosts]])
      .put(postsActions.fetchAllSucceeded(expectedSagaPosts))
      .run())

  test('integration test with withReducer', () =>
    expectSaga(onGetPosts)
      .withReducer(postsReducer)
      .provide([[call(getPosts), expectedSagaPosts]])
      .hasFinalState({
        posts: expectedSagaPosts,
      })
      .run())
})
