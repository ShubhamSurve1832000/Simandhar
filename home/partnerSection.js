import Image from 'next/image'
import Slider from 'react-slick'
import { Tab } from "@headlessui/react"



export default function partnerSection() {
    var partnerSlider = {
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
    return (
        <section className="section partner-section pt-0">
            <Tab.Group>
                <div className='container'>

                    <Tab.List className='tab-header'>
                        <Tab className='tab-btn active'>Our Corporate Tie-Ups</Tab>
                        <Tab className='tab-btn'>Our Loan Partners</Tab>
                        <Tab className='tab-btn'>Media Recognitions</Tab>
                    </Tab.List>

                    <div className='tab-container'>
                        <div className='tab-box'>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <div className='partner-slider'>
                                                                                 
                                    <Slider {...partnerSlider}>
                            <div className='logo-box resp-img-box'><Image src="/img/logo01.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo02.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo03.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo04.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo05.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo05.png"  layout="fill" className='resp-img' alt=''/></div>
                        </Slider>

                                    </div>
                                </Tab.Panel>

                                <Tab.Panel>
                                    <div className='partner-slider'>
                                                                                 
                                    <Slider {...partnerSlider}>
                            <div className='logo-box resp-img-box'><Image src="/img/logo01.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo02.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo03.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo04.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo05.png"  layout="fill" className='resp-img' alt=''/></div>
                        </Slider>

                                    </div>
                                </Tab.Panel>

                                <Tab.Panel>
                                    <div className='partner-slider'>
                                                                                 
                                    <Slider {...partnerSlider}>
                            <div className='logo-box resp-img-box'><Image src="/img/logo01.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo02.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo03.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo04.png"  layout="fill" className='resp-img' alt=''/></div>
                            <div className='logo-box resp-img-box'><Image src="/img/logo05.png"  layout="fill" className='resp-img' alt=''/></div>
                        </Slider>

                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>

                        </div >
                    </div >
                </div >
            </Tab.Group>
        </section >
    )
}
