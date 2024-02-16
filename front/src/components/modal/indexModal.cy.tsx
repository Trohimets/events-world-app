import React from 'react'
import { Modal } from './index'

describe('<Modal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Modal />)
  })
})