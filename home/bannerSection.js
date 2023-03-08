import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'


const bannerSection = ({showPopup}) => {
  
  var bannerSlider = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:5000,
	};

  return (
    <>
      <section className="banner-section flex">
        <div className="right-box">
          <Slider {...bannerSlider}>
            <div className='banner-slider'>
              <div className="banner-inner-slider" style={{backgroundImage: 'url("img/banner_bg.jpg")'}}>
              <div className="banner-content">
                  <div className="banner-text">
                    <h1 className='banner-title'>Get into <span>Big 4s and MNCs</span> with the most trusted institute of India</h1>
                    <p>We believe that education has the ability to transform every individual.</p>
                  </div>
                  <button className='btn maroon-btn' onClick={showPopup}>Enquire Now</button>
                </div>
              </div>
            </div>
            <div className='banner-slider'>
              <div className="banner-inner-slider" style={{backgroundImage: 'url("img/banner_bg02.png")'}}>
                <div className="banner-content">
                  <div className="banner-text">
                    <h1 className='banner-title'>Get into <span>Big 4s and MNCs</span> with the most trusted institute of India</h1>
                    <p>We believe that education has the ability to transform every individual.</p>
                  </div>
                  <button className='btn maroon-btn' onClick={showPopup}>Enquire Now</button>
                </div>
              </div>
            </div>
            <div className='banner-slider'>
              <div className="banner-inner-slider" style={{backgroundImage: 'url("img/banner_bg.jpg")'}}>
                <div className="banner-content">
                  <div className="banner-text">
                    <h1 className='banner-title'>Get into <span>Big 4s and MNCs</span> with the most trusted institute of India</h1>
                    <p>We believe that education has the ability to transform every individual.</p>
                  </div>
                  <button className='btn maroon-btn' onClick={showPopup}>Enquire Now</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="left-box resp-img-box">
          <h3 className='heading04'>Learn Anywhere with Online Courses</h3>
          <Image src="/img/trangle.png" alt="" layout="fill" className='resp-img' />
          <a className='btn white-btn white-btn-arrow' href="">Buy Courses</a>
          <div className="clear"></div>
        </div>
      </section>
      
    </>
  )
}


export default bannerSection;