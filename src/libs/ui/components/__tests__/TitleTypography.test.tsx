import { render, screen } from '@testing-library/react'

import TitleTypography from '../TitleTypography'

describe('Title Typography - component tests', () => {
  it('should display correctly title', async () => {
    // Given
    const title = 'Hello React Testing Library!'

    // When
    render(<TitleTypography title={title} />)

    // Then
    expect(
      screen.getByRole('heading', { name: /Hello React Testing Library!/i }),
    ).toBeInTheDocument()
  })
})
