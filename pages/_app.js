//import '@/styles/globals.css'
//import type { AppProps } from 'next/app'
//import '../styles/header-footer.css'
import '../styles/style.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import StickyComponents from '../components/StickyComponents'
import Image from 'next/image'

//export default function App({ Component, pageProps }: AppProps) {
export default function App({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <StickyComponents />

    <a href='#' className='chat-icon'><Image src="/img/chat.png" alt="" width={122} height={135} /></a>
    <Component {...pageProps} /> 
    <Footer />
    </>
    )

}




