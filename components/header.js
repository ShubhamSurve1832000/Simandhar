import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { CgProfile } from 'react-icons/cg'
import { BsCart2 } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoCaretForward } from 'react-icons/io5'


// function MyComponent (props) {
//   const [isActive, setActive] = useState(false);

//   const toggleClass = () => {
//     setActive(!isActive);
//   };

//   return (
//     <div 
//       className={isActive ? 'active': ''} 
//       onClick={toggleClass} 
//     >
//       <p>{props.text}</p>
//     </div>
//    );
// }

export default function header() {
  var programSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const [isActive, setActive] = useState(false);
  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  // const [porgrams, setPrograms] = useState([{ name: 'Our Programs', icon: '<IoCaretForward />' }, { name: 'US CPA' }, { name: 'EA' }, { name: 'CIA' }, { name: 'IFRS' }, { name: 'Data Analytics' }, { name: 'Simandhar Saamarth' }, { name: 'More' }])


  // const [links, setLinks] = useState([{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Webinars', path: '/Webinars' }, { label: 'Free Resources', path: '/Free Resources' }])
  return (

    <>
      <header className="header" id="header">
        <nav className='navbar hf-container'>
          <div className='logo_img  resp-img-box'>
            <Image src='/img/logo.png' layout="fill" className='resp-img' alt='Simandhar logo' />
            <Image src='/img/mobile_logo.png' layout="fill" className='resp-img mobile-logo' alt='Simandhar logo' />
          </div>
          <div className='left_nav'>
            <button className="menu-btn" >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div class="nav">
              <button class="close-menu">
                <span></span>
                <span></span>
              </button>
              <ul className='navbar_list'>
                {/* {
                links.map(link => (
                  <li>
                    <Link className="home" href={link.path}>{link.label}</Link>
                  </li>
                ))
              } */}
                <li className='active'>Home</li>
                <li>About</li>
                <li>Webinars</li>
                <li>Free Resources</li>
                <li className='more_dropdown'>
                  More
                  <span><i><RiArrowDropDownLine /></i></span>

                </li>
              </ul>
            </div>
            <div className='btn01'><button className='btn'>Buy Course</button></div>
            <span><i className='profile'> <CgProfile /></i></span>
            <span><i className='cart'> <BsCart2 /></i></span>
          </div>
          <div className='clear'></div>
        </nav>

        {/* 
        <div className='backgroud'>
          <div className='program_bar'>
            {
              porgrams.map(program => (
                <div className='nav-title'> {program.name}{program.icon}</div>
              ))
            }
          </div>
        </div> */}



        {/* Second NavBar */}
        <section className='backgroud'>

          <div className='program_bar'>
            <div className='nav-title'>Our Programs<span><i><IoCaretForward /></i></span></div>
              <div className='program-scroll'>
            <div className='programs'>
                {/* <Slider {...programSlider}> */}

                <div className='nav-title'><h3>US CPA</h3></div>
                <div className='nav-title'>US CMA</div>
                <div className='nav-title'>EA</div>
                <div className='nav-title'>CIA</div>
                <div className='nav-title'>IFRS</div>
                <div className='nav-title'>Data Analytics</div>
                <div className='nav-title'>Simandhar Saamarth</div>
                {/* </Slider> */}

                {/* <div className='nav-title'>More<span><i><RiArrowDropDownLine /></i></span>
            </div> */}
              </div>
            </div>
          </div>

        </section>


        {/* Offer Row */}
        <section>
          <div className='offer_row conatainer02'>
            <div className='offer_box1 resp-img-box'>
              <Image src='/img/flash_sale.png' layout="fill" className='resp-img' alt='' />
            </div>
            <div className='offer_box2'>
              <h3 >FLAT 50% OFF</h3>
            </div>
            <div className='offer_box3'>
              <h3>Discount <br /> on All Courses</h3>
            </div>
            <div className='offer_box4'>
              <h3>Promo Code : SALE 50</h3>
            </div>
            <div className='offer_box5'>
              <h3>Buy Now</h3>
            </div>
          </div>
        </section>
      </header>

      {/* Form */}
    </>
  )
}