//import '@/styles/globals.css'
//import type { AppProps } from 'next/app'
//import '../styles/header-footer.css'
import '../styles/style.scss'
import Header from '../components/header'
import Footer from '../components/footer'

//export default function App({ Component, pageProps }: AppProps) {
export default function App({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Component {...pageProps} /> 
    <Footer />
    </>
    )

}




