import Image from 'next/image'
import Slider from 'react-slick'
import { Tab } from "@headlessui/react"
import Link from 'next/link';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri'



export default function partnerSection({ indexData }) {
	var partnerSlider = {
		dots: false,
		infinite: false,
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

	// const data = [{ id: 0, title: "Our Corporate Tie-Ups" }, { id: 1, title: "Our Loan Partners" }, { id: 2, title: "Media Recognitions" }];

	const [isActive, setActive] = useState(false);

	const showTab = () => {
		setActive(!isActive);
	};

	const [selectedItem, setSelectedItem] = useState(null);
	const [items, setItem] = useState(indexData);

	const handleItemClick = (id) => {
		selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
		setActive(!isActive);
	}
	return (
		<section className="section partner-section pt-0">
			<Tab.Group>
				<div className='container'>
					<div className='tab-head-row'>
						<p className='tab-button-mobile tab-btn' onClick={showTab}>
							{selectedItem ? items.corporateTitle.find(item => item.id == selectedItem).title : "Select"}
							<span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine />
							</span>
						</p>

						<Tab.List className={'tab-header tab-head-box ' + ' ' + (isActive ? 'active' : '')}>
							{items.corporateTitle.map(item => (
								<Tab className="tab-btn" onClick={e => handleItemClick(e.target.id)} id={item.id}>
									{item.title}
								</Tab>
							))}
						</Tab.List>
					</div>
					<div className='tab-container'>
						<div className='tab-box'>
							<Tab.Panels>
								{
									items.corporateLogo.map((lists => {
										return <Tab.Panel>
											<div className='partner-slider'>

												<Slider {...partnerSlider}>
													{
														lists.list1.map((logos =>{
															return	<div className='logo-box resp-img-box'><Image src={logos.img} layout="fill" className='resp-img' /></div>



												}))
											}
											<div className='logo-box resp-img-box'><h2 className='heading04'><Link href='/partners'> View More</Link></h2></div>

													{/* <div className='logo-box resp-img-box'><Image src="/img/co_logo01.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/co_logo04.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/co_logo05.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><h2 className='heading04'><Link href='/partners'> View More</Link></h2></div> */}


													{/* <div className='logo-box resp-img-box'><Image src="/img/co_logo03.jpg" layout="fill" className='resp-img' /></div> */}
												</Slider>

											</div>
										</Tab.Panel>
									}))
								}

								{/* <Tab.Panel>
									<div className='partner-slider'>

										<Slider {...partnerSlider}>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo04.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo03.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo02.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/partners_logo01.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><h2 className='heading04'><Link href='/partners'> View More</Link></h2></div>

										</Slider>

									</div>
								</Tab.Panel> */}

								{/* <Tab.Panel>
									<div className='partner-slider'>
										<Slider {...partnerSlider}>											
											<div className='logo-box resp-img-box'><Image src="/img/media_logo05.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo04.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo03.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><Image src="/img/media_logo02.jpg" layout="fill" className='resp-img' /></div>
											<div className='logo-box resp-img-box'><h2 className='heading04'><Link href='/partners'> View More</Link></h2></div>									
										</Slider>
									</div>
								</Tab.Panel> */}
							</Tab.Panels>

						</div >
					</div >
				</div >
			</Tab.Group>
		</section >
	)
}
