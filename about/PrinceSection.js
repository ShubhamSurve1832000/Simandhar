import React, { useState } from 'react'


const PrinceSection = () => {

    const [data, setData] = useState([{ heading: "P", title: "PASSION", desc: "Passion in every work we do for our students and team members." },
    { heading: "R", title: "RESPONSIBLE", desc: "We take responsibility for every issue and solve them by collaborating." }, { heading: "I", title: "INTEGRITY", desc: "We like doing every work with utmost integrity, respect, and care." }, { heading: "N", title: "NURTURING", desc: "We believe in Nurturing individuals with different initiatives and grooming them." },
    { heading: "C", title: "COMMITTED", desc: "We believe in Commitment to continuous learning and updating ourselves with the latest changes." },
    { heading: "E", title: "ENERGY", desc: "We believe in quickly moving out from our mistakes and surrounding ourselves with positive energy to add value to our stakeholders." }])

    return (
        <section className='princeSection'>
            <div className='container-l'>
                <h2 className='heading02'>Our <span> PRINCE </span>values show how we work together</h2>
                <div className='flex space-between text-center'>
                    {
                        data.map(dataSet => (
                            <div className='grid-box'>
                                <div className='inner-box'>
                                    <h2 className='heading01'>{dataSet.heading}</h2>
                                    <p className='title01'>{dataSet.title} </p>
                                </div>
                                <div className='desc-box'>
                                    <p className='desc-para'>{dataSet.desc} </p>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>R</h2>
                            <p className='title01'>RESPONSIBLE</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We take responsibility for every issue and solve them by collaborating.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>I</h2>
                            <p className='title01'>INTEGRITY</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We like doing every work with utmost integrity, respect, and care.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>N</h2>
                            <p className='title01'>NURTURING</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We believe in Nurturing individuals with different initiatives and grooming them.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>C</h2>
                            <p className='title01'>COMMITTED</p>
                        </div>
                        <div className='desc-box'>
                            <p className='desc-para'>We believe in Commitment to continuous learning and updating ourselves with the latest changes.</p>
                        </div>
                    </div>
                    <div className='grid-box'>
                        <div className='inner-box'>
                            <h2 className='heading01'>E</h2>
                            <p className='title01'>ENERGY</p>
                        </div>                      <div className='desc-box'>
                            <p className='desc-para'>We believe in quickly moving out from our mistakes and surrounding ourselves with positive energy to add value to our stakeholders.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default PrinceSection