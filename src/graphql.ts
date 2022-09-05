import { ApolloClient, InMemoryCache, Reference } from '@apollo/client'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launches: {
          keyArgs: false,
          merge(existing, incoming) {
            let launches: Reference[] = []
            if (existing && existing.launches) {
              launches = launches.concat(existing.launches)
            }
            if (incoming && incoming.launches) {
              launches = launches.concat(incoming.launches)
            }
            return {
              ...incoming,
              launches,
            }
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql',
  cache,
})

export default client
