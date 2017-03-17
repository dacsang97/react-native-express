import React, { Component } from 'react'

import { PageHeader } from '../components'
import Page from './Page'

export default class DefaultPage extends Component {
  render() {
    const {title, footer, children, author, authorURL} = this.props

    return (
      <Page
        title={title} 
        footer={footer}
      >
        <PageHeader
          title={title}
          author={`@${author}`}
          authorURL={authorURL}
        />
        {children}
      </Page>
    )
  }
}
