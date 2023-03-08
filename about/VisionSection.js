import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import { useState } from 'react';

const VisionSection = () => {

    var visionSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            ,
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [data, setData] = useState([{ path: '/img/mission.png', title: "Our Mission", desc: "To provide highest standards of learning which can transform lives of students and professionals." }, { path: '/img/vision.png', title: "Our Vision", desc: "To upskill the professionals and make them adapt to continuous learning." }, { path: '/img/purpose.png', title: "Our Purpose", desc: "We believe that education has the ability to transform every individual." }])
    return (
        <section>
            <div className='three-box-grid'>
                {/* <Slider {...visionSlider}> */}

                {
                    data.map(setData => (
                        <div className='grid-box'>
                            <Image src={setData.path} layout="fill" alt='' className='resp-img' />
                            <h3 className='heading04'>{setData.title}</h3>
                            <p>{setData.desc}</p>
                        </div>
                    ))
                }


                {/* <div className='grid-box'>
                    <Image src="/img/mission.png" layout="fill" alt='' className='resp-img' />
                    <h3 className='heading04'>Our Mission</h3>
                    <p>To provide highest standards of learning which can transform lives of students and professionals.</p>
                </div>
                <div className='grid-box'>
                    <Image src="/img/vision.png" layout="fill" alt='' className='resp-img' />
                    <h3 className='heading04'>Our Vision</h3>
                    <p>To upskill the professionals and make them adapt to continuous learning.</p>
                </div>
                <div className='grid-box'>
                    <Image src="/img/purpose.png" layout="fill" alt='' className='resp-img' />
                    <h3 className='heading04'>Our Purpose</h3>
                    <p>We believe that education has the ability to transform every individual.</p>
                </div> */}
                {/* </Slider> */}
            </div>
        </section>
    )
}

export default VisionSection;