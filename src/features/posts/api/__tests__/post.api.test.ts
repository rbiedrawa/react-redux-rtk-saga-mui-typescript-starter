import { getPosts } from 'features/posts/api/index'
import fixture from 'test/server/db.initial.data.json'

describe('Post API test - MSW example', () => {
  it('should fetch all Posts', async () => {
    // Given
    const { posts } = fixture

    // When
    const result = await getPosts()

    // Then
    expect(result).toEqual(posts)
  })
})
