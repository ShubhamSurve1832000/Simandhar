import React from 'react'
import Image from 'next/image'

const TESection = () => {
    return (
        <section className='transform-educ'>
            <div className='education-row'>
                <div className="heading02">
                    “Education is not information,
                    it's transformation"
                </div>
                <div className="heading05">
                    Sripal jain, Co-Founder - Simandhar Education
                </div>
            </div>
            <div className='TE-flex container-l'>
                <div className='left-box'>
                    <h2 className='heading02'>Transforming Education</h2>
                    <p className='m-block'>The purpose of Simandhar Education is to transform the way education is being perceived. We believe that not just a professional degree or diploma, but the overall grooming of students also plays a vital role in making them successful in the corporate world.</p>
                    <div>
                        <p>Simandhar Education is India's Most Trusted Training Institute for US CPA, US CMA, Diploma IFRS, and Enrolled Agent.</p>
                        <ul>
                            <li>We are the Channel Partner of AICPA</li>
                            <li>Official partners of Becker Professional Education</li>
                            <li>Approved partner of the fast forward academy for Enrolled Agent in India</li>
                        </ul>
                    </div>
                </div>
                <div className='right-box'>
                    <Image src="/img/transform_education.png" layout="fill" className='resp-img' />
                </div>
            </div>

        </section>
    )
}

export default TESection