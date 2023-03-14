import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
// import Slider from 'react-slick'
import { CgProfile } from 'react-icons/cg'
import { BsCart2 } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoCaretForward } from 'react-icons/io5'
import Slider from 'react-slick'
import CpaProgram from '../components/CpaProgram'
import programData from '../database/data/program.json'


function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;

};

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

export default function header({showData,showData1}) {
  const scrollDirection = useScrollDirection();


  const [isActive, setActive] = useState(false);
  const showMenu = () => {
    setActive(!isActive);
  };

  const pathname = usePathname();

  // Nav Dropdown
  const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    setIsShow(!isShow);
    };

  const [isShow1, setIsShow1] = useState(false);
  const showDwnPopup1 = () => {
      setIsShow1(!isShow1);
      };  

  const [isShow2, setIsShow2] = useState(false);
  const showDwnPopup2 = () => {
          setIsShow2(!isShow2);
          };
  


  // const [isActive, setActive] = useState(false);
  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  return (

    <>
      <header   className={`header ${ scrollDirection === "down" ? "active" : " "}`} id="header">
        <nav className='navbar hf-container'>
          <div className='logo_img  resp-img-box'>
            <Link href="/"> <Image src='/img/logo.png' layout="fill" className='resp-img' alt='Simandhar logo' />
              <Image src='/img/mobile_logo.png' layout="fill" className='resp-img mobile-logo' alt='Simandhar logo' /></Link>
          </div>
          <div className='left_nav'>
            <button className="menu-btn" onClick={showMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={'nav' + ' ' + (isActive ? 'active' : '')}>
              <button class="close-menu" onClick={showMenu}>
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
                <li className={pathname == '/' ? 'active' : ''} onClick={showMenu}>  <Link href="/">  Home  </Link> </li>
                <li className={pathname == '/about-us' ? 'active' : ''} onClick={showMenu}>  <Link href="/about-us">About </Link> </li>
                <li className={pathname == '/webinars' ? 'active' : ''} onClick={showMenu}>   <Link href='/webinars'> Webinars</Link></li>
                <li className={pathname == '/resources' ? 'active' : ''} onClick={showMenu}><Link href='/resources'>Free Resources</Link></li>
                <li className='more_dropdown' onClick={showDwnPopup}>
                  More
                  <span  className={'tab-head-box ' + ' ' + (isShow ? 'active' : '')}><i><RiArrowDropDownLine /></i></span>
                  <ul className='navDropdown' style={{display: !isShow ? 'none' : 'block'}}>
                  
                    <li><a href="javascript:;">Sripal Jain USA Visit</a></li>
                    <li><a href="javascript:;">Students Corner</a></li>
                    <li><a href="javascript;">Corporate Journey</a></li>
                    <li><a href="javascript;">Corporate Events</a></li>
                    <li><a href="javascript;">Corporate Tie-Ups</a></li>
                    <li><a href="javascript;">SEC</a></li>
                    <li><a href="javascript;">Testimonials</a></li>
                    <li><a href="javascript;">Testimonials Videos</a></li>
                    <li><a href="javascript;">Blogs</a></li>
                    <li><a href="javascript;">Career</a></li>
                    <li><a href="javascript;">Contact Us</a></li>
                   
                  </ul>
                </li>
              </ul>
            </div>
            <div className='btn01'><button className='btn'>Buy Courses</button></div>
            <div className='profile-icon'>
              <span><i className='cart'> <BsCart2 /></i></span>
              <span><h3 className='profile'>Login </h3></span>
            </div>
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
          <div className='hf-container'>

            <div className='program_bar'>
              <div className= {'nav-title1' + ' '+(isShow2 ?"active":"")} onClick={showDwnPopup2}>Our Programs<span><i><IoCaretForward /></i></span></div>
              
              <div className={'program-scroll' + ' ' + (isShow2 ? 'active' : '')} >
             
                <div className='programs'>
                  {/* <Slider {...programSlider}> */}

                  <Link href='/us-cpa' className={pathname =='/us-cpa' ? "nav-title active" :" nav-title"}>US CPA</Link>
                  <Link href='/us-cma' className={pathname =='/us-cma' ? "nav-title active" :" nav-title"}>US CMA</Link>
                  <Link href='/ea' className={pathname =='/ea' ? "nav-title active" :" nav-title"}>EA</Link>
                  <Link href='/cia' className={pathname =='/cia' ? "nav-title active" :" nav-title"}>CIA</Link>
                  <Link href='/ifrs' className={pathname =='/ifrs' ? "nav-title active" :" nav-title"}>IFRS</Link>
                  <Link href='/dataAnalytics' className={pathname =='/dataAnalytics' ? "nav-title active" :" nav-title"}>Data Analytics</Link>
                  <Link href='/saamarth' className={pathname =='/saamarth' ? "nav-title active" :" nav-title"}>Simandhar Saamarth</Link>
                  <Link href='' className='more_dropdown nav-title' onClick={showDwnPopup1}>
                    More
                    <span><i><RiArrowDropDownLine /></i></span>
                    {/* <ul className='navDropdown' style={{display: !isShow1 ? 'none' : 'block'}}>
                    <li><a href="javascript:;">Sripal Jain USA Visit</a></li>
                    <li><a href="javascript:;">Students Corner</a></li>
                    <li><a href="javascript;">Corporate Journey</a></li>
                    <li><a href="javascript;">Corporate Events</a></li>
                    <li><a href="javascript;">Corporate Tie-Ups</a></li>
                    <li><a href="javascript;">SEC</a></li>
                    <li><a href="javascript;">Testimonials</a></li>
                    <li><a href="javascript;">Testimonials Videos</a></li>
                    <li><a href="javascript;">Blogs</a></li>
                    <li><a href="javascript;">Career</a></li>
                    <li><a href="javascript;">Contact Us</a></li>
                  </ul> */}
                  </Link>
                  {/* </Slider> */}

                  {/* <div className='nav-title'>More<span><i><RiArrowDropDownLine /></i></span>
            </div> */}
                </div>
                

              </div>
            </div>
            
          </div>

        </section>
        {
          showData ? 
        (  <CpaProgram programData={programData.cpaPage} />) :( " ")
        }
           {
          showData1 ? 
        (  <CpaProgram programData={programData.cmaPage} />) :( " ")
        }
       



      </header>

      {/* Form */}
    </>
  )
}