import { render } from '@testing-library/react'
import Header from './Header'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Header />)
    expect(container).toBeVisible()
  })
})
