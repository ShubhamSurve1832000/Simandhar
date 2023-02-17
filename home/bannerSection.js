import Image from 'next/image'
import React, { useState } from 'react'

export default function bannerSection() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <section className="banner-section flex">
        <div className="left-box resp-img-box">
        <Image src="/img/ad_banner.png" alt="" layout="fill" className='resp-img'/>
        </div>
        <div className="right-box">
          <div className="banner-content">
            <div class="banner-text">
              <h1 className='banner-title'>Get into <span>Big 4s and MNCs</span> with the most trusted institute of India</h1>
              <p>We believe that education has the ability to transform every individual.</p>
            </div>
            <a href="#" className='btn maroon-btn'>Enquire Now</a>
          </div>
        </div>
      </section>
      <div class="sticky-box">
        <a href="#" className='resp-img-box'><Image src="/img/phone.png" alt="" layout="fill" className='resp-img'/></a>
        <a href="#" className='resp-img-box'><Image src="/img/email.png" alt="" layout="fill" className='resp-img'/></a>
        <a href="#" className='wa-icon resp-img-box'><Image src="/img/whatsapp.png" alt=""  layout="fill" className='resp-img'/></a>
        <button className={'enq-btn resp-img-box' + ' ' +(isActive ?  'active' : '')} onClick={toggleClass} >
          <Image src="/img/enquire_now.svg" alt="" layout="fill" className='resp-img'/>
        </button>
      </div>
      <div className={'enq-form' + ' ' +(isActive ?  'active' : '')}>
        <button className='close-form resp-img-box' onClick={toggleClass}><Image src="/img/form_arrow.svg" alt="" layout="fill" className='resp-img' /></button>
        <div className='form-header'>
          <i className='resp-img-box'><Image src="/img/enq_icon.svg" layout="fill" className='resp-img' /></i>
          <p>We assure a Price match <br/> Guarantee with any Becker Partner</p>
        </div>
        <div className='form-box'>
          <h6>Take The First Step!</h6>
          <form>
            <div className='input-box'>
              <input type="text" placeholder='Enter Your Name'/>
            </div>
            <div className='input-box'>
              <input type="text" placeholder='Enter Your Email Address' />
            </div>
            <div className='input-box'>
              <input type="text" placeholder='Enter your Mobile Number' />
            </div>
            <div className='input-box custom-select'>
              <select id="select-course" >
                <option>Select Course</option>
                <option value="Course 1">Course 1</option>
                <option value="Course 2">Course 2</option>
                <option value="Course 3">Course 3</option>
                <option value="Course 4">Course 4</option>
              </select>
            </div>
            <div className='input-box'>
              <button className='btn black-border black-border-btn-arrow'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="overlay" style={{display: (isActive ? "block" : 'none')}}></div>
    </>
  )
}
