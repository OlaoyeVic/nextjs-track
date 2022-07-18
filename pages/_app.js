import Head from 'next/head'
import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxStore)
  return (
    <>
      <Head>
        <link href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' rel='stylesheet' />
      </Head>
      <Provider store={store}>
        <Navbar />
        <div className="w-9/12 m-auto pt-10">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}
export default MyApp
