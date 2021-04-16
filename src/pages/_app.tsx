import React from 'react'
import { withUrqlClient, NextUrqlAppContext } from 'next-urql'
import NextApp, { AppProps } from 'next/app'

// the URL to /api/graphql
const GRAPHQL_ENDPOINT = `http://localhost:3002/api/graphql`

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

App.getInitialProps = async (ctx: NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx)
  return { ...appProps }
}

export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: GRAPHQL_ENDPOINT,
  fetch,
}))(
  // @ts-ignore
  App
)
