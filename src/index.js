import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/rarity-adventure/rarity', //https://api.thegraph.com/subgraphs/name/rarity-adventure/rarity
  cache: new InMemoryCache()
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);