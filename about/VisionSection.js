import React from 'react'
import Image from 'next/image';

const VisionSection = () => {
  return (
    <section>
        <div className='three-box-grid'>
            <div className='grid-box'>
                <Image src="/img/mission.png" layout="fill" alt='' className='resp-img' />
                <h3 className='heading04'>Our Mission</h3>
                <p>To provide highest standards of learning which can transform lives of students and professionals.</p>
            </div>
            <div className='grid-box'>
                <Image src="/img/vision.png" layout="fill" alt='' className='resp-img' />
                <h3 className='heading04'>Our Vision</h3>
                <p>To upskill the professionals and make them adapt to continuous learning.</p>
            </div>
            <div className='grid-box'>
                <Image src="/img/purpose.png" layout="fill" alt='' className='resp-img' />
                <h3 className='heading04'>Our Purpose</h3>
                <p>We believe that education has the ability to transform every individual.</p>
            </div>
        </div>
    </section>
  )
}

export default VisionSection;