import '@testing-library/jest-dom'
import { render, screen } from './setup-tests'

import App from './App'

test('simple render', () => {
  render(<App />)

  expect(screen.getByTestId('search')).toBeInTheDocument()
  expect(screen.getByTestId('lucky')).toBeInTheDocument()
})
