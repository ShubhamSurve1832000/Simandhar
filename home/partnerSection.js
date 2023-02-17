import Image from 'next/image'
import Slider from 'react-slick'
import { Tab } from "@headlessui/react"



export default function partnerSection() {
	var partnerSlider = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<section className="section partner-section pt-0">
			<Tab.Group>
				<div className='container'>
					<div className='tab-head-row'>
						<Tab.List className='tab-header'>
							<Tab className='tab-btn active'>Our Corporate Tie-Ups</Tab>
							<Tab className='tab-btn'>Our Loan Partners</Tab>
							<Tab className='tab-btn'>Media Recognitions</Tab>
						</Tab.List>
					</div>
					<div className='tab-container'>
						<div className='tab-box'>
							<Tab.Panels>
								<Tab.Panel>
									<div className='partner-slider'>

										<Slider {...partnerSlider}>
											<div className='logo-box resp-img-box'><Image src="/img/logo01.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/logo02.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/logo03.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/logo04.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/logo05.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/logo05.png" layout="fill" className='resp-img' /></div>
										</Slider>

									</div>
								</Tab.Panel>

								<Tab.Panel>
									<div className='partner-slider'>

										<Slider {...partnerSlider}>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo01.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo02.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo03.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo04.png" layout="fill" className='resp-img' /></div>
										</Slider>

									</div>
								</Tab.Panel>

								<Tab.Panel>
									<div className='partner-slider'>

										<Slider {...partnerSlider}>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo01.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo02.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo03.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo04.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo05.png" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo06.svg" layout="fill" className='resp-img' /></div>
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
