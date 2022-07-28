import Head from 'next/head'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import TopBar from '../components/TopBar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="dark:bg-gray-900 bg-gray-50 w-full min-h-screen">
        <TopBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
