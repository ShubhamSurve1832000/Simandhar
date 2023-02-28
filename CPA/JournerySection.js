import Image from 'next/image'

const JournerySection = ({journeyData}) => {
  return (
    <>
      <section className="section journey-section">
        <div className="container-l">
          <h2 className="heading02">{journeyData.mainHeading}</h2>
          <div className="journey-container">

            {journeyData.journey.map((journey => {
              return <figure className="journey-box">
                <dl>
                  <dt className="num">{journey.number}</dt>
                  <dd className='journey-icon resp-img-box'><Image src={journey.img} alt="" layout="fill" className='resp-img' /></dd>
                </dl>
                <figcaption>
                  <h6 className="heading06">{journey.title}</h6>
                  <ul>
                    {journey.descriptions.map((description) => {
                      return <li>{description}</li> 
                    })}
                  </ul>
                </figcaption>
              </figure>
            }))}



            {/* <figure className="journey-box">
              <dl>
                <dt className="num">2</dt>
                <dd className='journey-icon resp-img-box'><Image src="/img/cpa/jour_02.svg" alt="" layout="fill" className='resp-img' /></dd>
              </dl>
              <figcaption>
                <h6 className="heading06">Apply for CPA Exam</h6>
                <ul>
                  <li>Submit your application</li>
                </ul>
              </figcaption>
            </figure>
            <figure className="journey-box">
              <dl>
                <dt className="num">3</dt>
                <dd className='journey-icon resp-img-box'><Image src="/img/cpa/jour_03.svg" alt="" layout="fill" className='resp-img' /></dd>
              </dl>
              <figcaption>
                <h6 className="heading06">Study for the exam</h6>
                <ul>
                  <li>Study with Simandhar & Becker</li>
                </ul>
              </figcaption>
            </figure>
            <figure className="journey-box">
              <dl>
                <dt className="num">4</dt>
                <dd className='journey-icon resp-img-box'><Image src="/img/cpa/jour_04.svg" alt="" layout="fill" className='resp-img' /></dd>
              </dl>
              <figcaption>
                <h6 className="heading06">Schedule the exam</h6>
                <ul>
                  <li>Schedule exam with Prometric</li>
                </ul>
              </figcaption>
            </figure>
            <figure className="journey-box">
              <dl>
                <dt className="num">5</dt>
                <dd className='journey-icon resp-img-box'><Image src="/img/cpa/jour_05.svg" alt="" layout="fill" className='resp-img' /></dd>
              </dl>
              <figcaption>
                <h6 className="heading06">Succeed</h6>
                <ul>
                  <li>Take the exam, including the ethics exam</li>
                  <li>Obtain work experience</li>
                  <li>Apply for licensure</li>
                </ul>
              </figcaption>
            </figure> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default JournerySection