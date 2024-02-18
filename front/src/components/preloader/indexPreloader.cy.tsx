import React from 'react'
import { Preloader } from './index'

describe('<Preloader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Preloader />)
  })
})