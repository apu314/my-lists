import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('[HomePage Test suite]', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the title', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /myLists/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
