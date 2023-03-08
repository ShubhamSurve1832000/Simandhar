import Image from 'next/image'

const OnlineCourseSection = () => {
  return (
    <>
      <section className="ol-course-section ">
        <div className="container-l">
          <h2 className="heading02">Buy Hassle-Free Online Courses</h2>
          <div className="course-container">
            <figure className='course-box'>
              <div className="img-box resp-img-box"><Image src="/img/cpa/course01.jpg" layout="fill" className='resp-img' /></div>
              <figcaption>
                <h6 className="heading05">Enhance your US CPA Exam/License eligibility with a Bridge Course</h6>
                <a href="javascript:; " className="btn maroon-btn maroon-btn-arrow">Buy Course</a>
              </figcaption>
            </figure>
            <figure className='course-box'>
              <div className="img-box resp-img-box"><Image src="/img/cpa/course02.jpg" layout="fill" className='resp-img' /></div>
              <figcaption>
                <h6 className="heading05">Enhance your US CPA Exam/License eligibility with a Bridge Course</h6>
                <a href="javascript:; " className="btn maroon-btn maroon-btn-arrow">Buy Course</a>
              </figcaption>
            </figure>
            <figure className='course-box'>
              <div className="img-box resp-img-box"><Image src="/img/cpa/course03.jpg" layout="fill" className='resp-img' /></div>
              <figcaption>
                <h6 className="heading05">Enhance your US CPA Exam/License eligibility with a Bridge Course</h6>
                <a href="javascript:; " className="btn maroon-btn maroon-btn-arrow">Buy Course</a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourseSection;