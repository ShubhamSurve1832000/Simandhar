import React from 'react'
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'


export default function footer() {
  return (
    <>
      <footer className='footer' id="footer">
        <div className='ft-top-row'>
          <div className='hf-container footer_row'>
            <div className='Footer_box1 flex01'>
              <div className='logo_img  resp-img-box'>
                <Image src='/img/logo.png' layout="fill" className='resp-img' alt='Simnadhar logo'></Image>
              </div>
              <div className='social_media'>
                <i><BsFacebook /></i>
                <i><BsTwitter /></i>
                <i><BsInstagram /></i>
                <i><BsYoutube /></i>
                <i><BsLinkedin /></i>
              </div>
            </div>
          </div>
        </div>
        <div className='ft-bottom-row'>
          <div className='hf-container'>
            <div className='footer_grid'>

              <div className='footer_box a'>
                <p className='footer_para'>An award-winning institute that believes in transforming lives. Simandhar Education is aiming to upskill you and create a new-age approach for success.</p>
              </div>
              <div className='footer_box b'>
                <h4 className='footer_title'>Our Courses <span><i>< IoChevronForward /></i></span> </h4>
                <ul>
                  <li className='title01'>US Certified Public Accountant</li>
                  <li className='title01'>US Certified Management Accountant</li>
                  <li className='title01'>Enrolled Agent</li>
                  <li className='title01'>Certified Internal Auditor</li>
                  <li className='title01'>IFRS</li>
                  <li className='title01'>Data Analytics</li>
                  <li className='title01'>Simandhar Saamarth Workshops</li>
                </ul>
              </div>
              <div className='footer_box c'>
                <div>
                  <h4 className='footer_title'>Webinars  <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                    <li className='title01'>US CPA</li>
                    <li className='title01'> US CMA </li>
                    <li className='title01'>EA</li>
                  </ul>
                </div>
                <div>
                  <h4 className='footer_title'>Student Corner   <span><i>< IoChevronForward /></i></span> </h4>
                  <h4 className='footer_title'>Testimonial   <span><i>< IoChevronForward /></i></span> </h4>
                </div>

              </div>
              <div className='footer_box d'>
                <div>
                  <h4 className='footer_title'>Corporate   <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                    <li className='title01'>Corporate Journey</li>
                    <li className='title01'> Corporate Events </li>
                    <li className='title01'>Corporate Tie Ups</li>
                  </ul>
                </div>
                <div> <h4 className='footer_title'>Blogs   <span><i>< IoChevronForward /></i></span> </h4>
                  <h4 className='footer_title'>Careers    <span><i>< IoChevronForward /></i></span> </h4>
                </div>

              </div>
              <div className='footer_box e'>
                <div>
                  <h4 className='footer_title'>User Registration/Sign-up    <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                    <li className='title01'>Corporate Tie Ups</li>
                    <li className='title01'>Corporate Tie Ups</li>
                  </ul></div>
                <div> <h4 className='footer_title'>About Us    <span><i>< IoChevronForward /></i></span> </h4>
                  <h4 className='footer_title'>Contact Us     <span><i>< IoChevronForward /></i></span> </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <h3 className='copyright'>Copyright © 2023 SIMANDHAR EDUCATION LLP - All rights reserved</h3>
        </div>

      </footer>
    </>
  )
}

