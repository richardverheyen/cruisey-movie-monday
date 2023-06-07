import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tmdb-one-blue.vercel.app/',
  cache: new InMemoryCache({
    typePolicies: {
      Movie: {
        keyFields: ["id", "title", "release_date"],
        fields: {
          poster_path: {
            read(poster_path) {
              // Prepend the hosting url on posters in Tom Cruise's cast section
              if (poster_path) {
                return 'https://image.tmdb.org/t/p/w500/' + poster_path;
              } else {
                return "";
              }
            }
          },
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
