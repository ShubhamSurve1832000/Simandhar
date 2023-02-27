import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'


const StickyComponents = ({isactive, showPopup}) => {
 
  const buttonNameRef = useRef()


  useEffect(() => {
    const timer = setTimeout(() => {
      buttonNameRef.current.click()
    }, 4000);
    return () => clearTimeout(timer);
   
  }, []);

  return (
    <>
    <div class="sticky-box">
        <a href="#" className='resp-img-box'><Image src="/img/phone.png" alt="" layout="fill" className='resp-img' /></a>
        <a href="#" className='resp-img-box'><Image src="/img/email.png" alt="" layout="fill" className='resp-img' /></a>
        <a href="#" className='wa-icon resp-img-box'><Image src="/img/whatsapp.png" alt="" layout="fill" className='resp-img' /></a>
       
        <button className={'enq-btn resp-img-box' + ' ' + (isactive ? 'active' : '')} onClick={showPopup}  ref={buttonNameRef}>
          <Image src="/img/enquire_now.svg" alt="" layout="fill" className='resp-img' />
        </button>
      </div>

      
    </>
  )
}

export default StickyComponents