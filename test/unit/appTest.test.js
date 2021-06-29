import React from 'react'
import {render, getByRole} from '@testing-library/react'
import App from 'app'

describe('App', () => {
  render(<App/>)

  it('renders header component', () => {
    expect(document.querySelector('Header')).toBeDefined()
  })

  it('renders footer component', () => {
    expect(document.querySelector('Footer')).toBeDefined()
  })
})
