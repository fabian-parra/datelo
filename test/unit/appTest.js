import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import App from 'app'

describe('App', () => {
  const app = shallow(<App/>)

  it('renders header component', () => {
    expect(app.find('Header')).to.be.exist
  })

  it('renders footer component', () => {
    expect(app.find('Footer')).to.be.exist
  })
})
