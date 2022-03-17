import reducer, { postsActions, selectPosts } from 'features/posts/store/posts.slice'
import { Post } from 'features/posts/types'
import { RootState, store } from 'store/store'

const expectedPosts = [
  { id: '1', body: 'post1', title: 'post1' },
  { id: '2', body: 'post2', title: 'post2' },
]

describe('State tests', () => {
  it('should initially set post to an empty array', () => {
    const state = store.getState().posts
    expect(state.posts.length).toEqual(0)
  })
})

describe('Reducer tests', () => {
  it('should return the initial state when passed an empty action', () => {
    // Given
    const initialState = undefined

    const action = { type: '' }

    // When
    const result = reducer(initialState, action)

    // Then
    expect(result).toEqual({ posts: [] })
  })

  it('should add received posts', () => {
    // Given
    const initialState = undefined

    const action = postsActions.fetchAllSucceeded(expectedPosts)

    // When
    const result = reducer(initialState, action)

    // Then
    expect(Object.keys(result.posts).length).toEqual(expectedPosts.length)
    expect(result.posts).toEqual(expectedPosts)
  })
})

describe('Selectors tests', () => {
  it('should return empty posts', () => {
    // Given
    const state: RootState = {
      posts: {
        posts: [],
      },
      router: {},
    }

    // When
    const result = selectPosts(state)

    // Then
    expect(result).toEqual([])
  })
})

const expectedSagaPosts: Post[] = [{ id: '1', title: 'saga', body: 'saga' }]

jest.mock('../../api/index', () => ({
  async getPosts() {
    return expectedSagaPosts
  },
}))

describe('Saga tests', () => {
  it('should return all posts when fetchAll dispatched (using mocked Rest API)', async () => {
    // When
    await store.dispatch(postsActions.fetchAll())

    // Then
    expect(store.getState().posts.posts).toEqual(expectedSagaPosts)
  })
})
