import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default withApollo(

  ({ ctx, headers, initialState }) => {
    const backendApiUrl = process.browser ? publicRuntimeConfig.BACKEND_API_URL : publicRuntimeConfig.BACKEND_LOCAL_API_URL

    return new ApolloClient({
      uri: `${backendApiUrl}/graphql`,
      cache: new InMemoryCache().restore(initialState || {})
    })
  })
