import React, { useState } from 'react'
import Image from 'next/image'
const PartnersSection = () => {
    const [box, setBox]= useState([{path:'/img/becker-logo.jpg'},{path:'/img/Aicpa.jpg'},{path:'/img/BDO_logo.jpg'}])
    return (
        <section className='partners-section'>

            <h2 className='heading02 text-center'>OUR OFFICIAL PARTNERS</h2>
            <div className='container-s'>
            <div className='partners-grid'>
                {
                    box.map(images =>(
                        <div className='grid-box'><Image src={images.path} layout="fill" className='resp-img' /></div>
                        ))
                }
                {/* <div className='grid-box'><Image src="/img/Aicpa.jpg" layout="fill" className='resp-img' /></div>
                <div className='grid-box'><Image src="/img/BDO_logo.jpg" layout="fill" className='resp-img' /></div> */}
            </div>
            </div>
        </section>
    )
}

export default PartnersSection  