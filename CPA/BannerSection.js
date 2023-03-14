import Image from 'next/image'

import React from 'react'

const BannerSection = ({bannerData ,showData}) => {


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
          {
            showData ? (<h3 className='title01'>This Course Combines Simple Statistical and Data Visualization tools to give Participants the Skills They Need to Analyze Data. Participants Should be Able to Execute the Required Financial Analysis Using Strong Tools by the end of this Course. As an Analyst, Manager, or Consultant, You'll Need to understand financial data.CPA has become one of the most sought-after courses in the field of accounting in recent times. With global recognition, the CPA license allows you to get a job easily. </h3>) : (" ") 
          }
        </div>
      </section>
    </>
  )
}

export default BannerSection
