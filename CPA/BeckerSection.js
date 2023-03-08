import React from 'react'
import Image from 'next/image'

const BeckerSection = ({beckerData}) => {
  return (
    <section className='section'>
        <div className="container-l p2">
            <h2 className='heading02'>{beckerData.mainHeading}</h2>
            <div className="twoBox">
                <p className="boxOne pr-color">{beckerData.discription}</p>
                <div className="boxTwo">
                    <img src={beckerData.img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BeckerSection