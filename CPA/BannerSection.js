import Image from 'next/image'

import React from 'react'

const BannerSection = ({bannerData}) => {


  // export default function bannerSection() {
  return (
    <>
      <section className="program-banner ">
        <div className="banenr-left resp-img-box">
          <Image src={bannerData.img} alt="" layout="fill" className='resp-img' />
        </div>
        <div className="progam-info">
          <h2 className="heading02">{bannerData.mainHeding}</h2>
          <ul>
            {
            bannerData.lists.map((item => {
              return <li>{item.list}</li>
            }))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default BannerSection
