import React from 'react'
import { useState } from 'react'


const ExpPlaceInfo = () => {
    const [data, setData] = useState([{ title: "Students", value: "10000+" }, { title: "Faculties", value: "15+" }, { title: "Corporate Tie-Ups", value: "40+" }, { title: "Placements", value: "500+" }])
    return (
        <>
            <section className='values'>
                <p className='heading05'>
                    We believe that education has the ability to transform every individual. Today the students just don’t need information to be educated but it needs overall transformation to be successful in life.
                </p>
                <div className='four-box-grid'>
                    {
                        data.map(values => (
                            <div className='grid-box'>
                                <h3 className='heading02'>{values.value}</h3>
                                <h4 className='title'>{values.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* <section className='values'>
            <p className='heading05'>
                    We believe that education has the ability to transform every individual. Today the students just don’t need information to be educated but it needs overall transformation to be successful in life.
                </p>
            <div className='four-box-grid'>
                    <div className='grid-box'>
                        <h3 className='heading02'>10000+</h3>
                        <h4 className='title'>Students</h4>
                    </div>
                    <div className='grid-box'>
                        <h3 className='heading02'>15+</h3>
                        <h4 className='title'>Faculties</h4>
                    </div>
                    <div className='grid-box'>
                        <h3 className='heading02'>40+</h3>
                        <h4 className='title'>Corporate Tie-Ups  </h4>
                    </div>
                    <div className='grid-box'>
                        <h3 className='heading02'>500+</h3>
                        <h4 className='title'>Placements</h4>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default ExpPlaceInfo