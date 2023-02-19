import React from 'react'
import Image from 'next/image'
const PartnersSection = () => {
    return (
        <section className='partners-section'>

            <h2 className='heading02 text-center'>OUR OFFICIAL PARTNERS</h2>
            <div className='container-s'>
            <div className='partners-grid'>
                <div className='grid-box'><Image src="/img/becker-logo.png" layout="fill" className='resp-img' /></div>
                <div className='grid-box'><Image src="/img/Aicpa.png" layout="fill" className='resp-img' /></div>
                <div className='grid-box'><Image src="/img/BDO_logo.png" layout="fill" className='resp-img' /></div>
            </div>
            </div>
        </section>
    )
}

export default PartnersSection  