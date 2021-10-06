import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

// If the project was bigger, it would have been wise to use a global state manager,
// I considered HookState, Redux would be a good choice for an even larger project
// In this case I considered it wasn't necessary

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);