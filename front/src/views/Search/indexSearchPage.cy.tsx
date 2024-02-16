import React from 'react'
import { SearchPage } from './index'

describe('<SearchPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchPage />)
  })
})