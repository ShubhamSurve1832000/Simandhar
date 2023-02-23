import Image from 'next/image'

const PlacementSection = () => {
  return (
    <>
      <section className="section placement-section pt-0">
        <div className="container-l">
          <h2 className="heading02">Our Placement Partners</h2>
          <div className="partner-container">
            <div className="partner-logo-box">
              <div className="logo-box resp-img-box">
                <Image src="/img/logo05.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image src="/img/logo04.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image src="/img/logo01.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image src="/img/logo03.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image src="/img/logo02.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image src="/img/pwc_logo.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <Image src="/img/grant_logo.png" alt="" layout="fill" className='resp-img' />
              </div>
              <div className="logo-box resp-img-box">
                <a href="javascript:;" className='btn maroon-border-btn maroon-border-btn-arrow'>View All Partners</a>
              </div>  
            </div>
            <div className="partner-addbanner resp-img-box">
              <Image src="/img/cpa/add_banner.png" alt="" layout="fill" className='resp-img' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlacementSection;