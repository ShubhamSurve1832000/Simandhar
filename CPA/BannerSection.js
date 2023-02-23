import Image from 'next/image'

import React from 'react'

const BannerSection = () => {
  


// export default function bannerSection() {
  return (
    <>
      <section className="program-banner">
        <div className="banenr-left resp-img-box">
          <Image src="/img/cpa/banner_video.jpg" alt="" layout="fill" className='resp-img'/>
        </div>
        <div className="progam-info">
          <h2 className="heading02">US Certified Public Accountant Exam</h2>
          <ul>
            <li>3 Times CPA Watt Sells Awards</li>
            <li>Best CPA Institute (Awarded by Becker)</li>
            <li>International Recognition</li>
            <li>Upskill in US GAAP & Business Laws</li>
            <li>Flexible & Easy to Pass</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default BannerSection
