import React from 'react'
import { Authorization } from './authorization'

describe('<Authorization />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Authorization />)
  })
})