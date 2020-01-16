import App from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withApolloClient from 'lib/with-apollo-client'

import 'styles/styles.scss'

class MyApp extends App {
  render () {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
