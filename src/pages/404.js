import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <FlexContainer
        renderMain={() => {
          return (
            <h3>This page doesn't exist. How'd you even get here? Leave the poor URL bar alone.</h3>
          )
        }}
        renderSidebar={() => null}
      />
    )
  }
}
