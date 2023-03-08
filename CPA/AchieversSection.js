import React from 'react'
import Image from 'next/image'

export async function getStaticProps(context) {
	const res = await fetch('http://localhost:3000/achivers')
	const data = await res.json()
	return {
		props: {
			data,
		},
	}
}


const AchieversSection = ({ achieverData, showData }) => {

	// export default function achieversSection({ data }) {
	return (
		<section className="section achiever-section pt-8">
			<div className='container'>
				<h2 className='heading02'>{achieverData.mainHeading}</h2>
				{/* <div className='achiever-container'>
					{/* {data.map((achiever) => (
						<li>{achiever.desc}</li>
					))} */}

				<div className='achiever-container'>
					{achieverData.list.map((box => {

						return <figure className='achiever-box'>
							<div className='achiever-img resp-img-box'>
								<Image src={box.img} layout="fill" className='resp-img' />
							</div>
							<figcaption>
								
								{
									showData ? (
										<p>{box.para}</p>
									) : ("")
								}
								{
									showData ? (
										<p><a href='#' className='rm-btn'>{box.btn}</a></p>
									) : ("")
								}
								

								<span className='achiever-name'>{box.title}</span>
								<span className='achiever-pos'>{box.caption}</span>
							</figcaption>
						</figure>
					}))}
				</div>



				{/* <figure className='achiever-box'>
						<div className='achiever-img resp-img-box'>
							<Image src='/img/ashwiniNathan.jpg' layout="fill" className='resp-img' />
						</div>
						<figcaption>
							<p>I'm thrilled to share that I have cleared all 4 parts of the US CPA examination. It's been a challenging journey and a lot of ups and downs from deciding to quit my job to studying full time and..</p>
							<p><a href='#' className='rm-btn'>Read More</a></p>
							<span className='achiever-name'>Ashwini Nathan</span>
							<span className='achiever-pos'>US CPA</span>
						</figcaption>
					</figure>
					<figure className='achiever-box'>
						<div className='achiever-img resp-img-box'>
							<Image src='/img/raghavPrassana.png' layout="fill" className='resp-img' />
						</div>
						<figcaption>
							<p>Top-notch quality of student service. Truly a student development oriented organization. The placements and the value adds are impeccable. Great place! Wonderful staff! I definitely recommend!</p>
							<p><a href='#' className='rm-btn'>Read More</a></p>
							<span className='achiever-name'>Raghav Prassanna</span>
							<span className='achiever-pos'>US CPA</span>
						</figcaption>
					</figure>
					<figure className='achiever-box'>
						<div className='achiever-img resp-img-box'>
							<Image src='/img/wasinMankad.png' layout="fill" className='resp-img' />
						</div>
						<figcaption>
							<p>And here starts my journey to the US CPA. One down and 3 more subjects to go. Thank you Simandhar team for the exception support!</p>
							<p><a href='#' className='rm-btn'>Read More</a></p>
							<span className='achiever-name'>Wasim Mankad</span>
							<span className='achiever-pos'>US CPA</span>
						</figcaption>
					</figure>
				</div>  */}
				<div className='btn-wrap text-center'><a className='btn maroon-border-btn maroon-border-btn-arrow'>View All Testimonials</a></div>
			</div>

		</section>
	)
}
export default AchieversSection
