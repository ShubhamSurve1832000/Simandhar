import React from 'react'
import Image from 'next/image'

const Gallery = ({ galleryData }) => {
    return (
        <>
            <section className='gallery-section background-gradient'>
                <div className='container-l2'>
                    <div className='gallery-box'>
                        {
                            galleryData.map((path => {
                                return (
                                    <div className='gallery-img'>
                                        <Image src={path.path} layout="fill" alt='' className='resp-img' />
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery