
import '../styles/style.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import StickyComponents from '../components/StickyComponents'
import FormComponents from '../components/form'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';


export default function App({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);

  const showPopup = () => {
    setActive(!isActive);
  };
  
  return(
    <>
    <Header/>
    <StickyComponents showPopup={showPopup} isactive={isActive}/>
    <FormComponents isactive={isActive} showPopup={showPopup}/>
    <a href='#' className='chat-icon'><Image src="/img/chat.png" alt="" width={122} height={135} /></a>
    <Component {...pageProps} showPopup={showPopup}/> 
    <Footer />
    </>
    )

}




