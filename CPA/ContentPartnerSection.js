import Image from 'next/image'

const ContentPartnerSection = () => {
  return (
    <>
      <section className="section cont-partner-section">
        <div className="container-l">
          <h2 className="heading02">Our Content Partners</h2>
          <div className="cont-partner-container">
            <div className="cont-partner-row">
              <div className="logo-box resp-img-box"><Image src="/img/cpa/becker_logo.png" alt="" layout="fill" className='resp-img' /></div>
              <div className="content-box p2">
                <p>Simandhar Education is the official partner of Becker Education International Ltd, a global leader in CPA & CMA exam review. Since its inception, Becker has helped lakhs of CPA & CMA aspirants achieve their goals. <a href="javascript:;" className="read-more">Read More</a></p>
                <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Free Becker 15 Days Trial</a>
              </div>
            </div>
            <div className="cont-partner-row">
              <div className="logo-box resp-img-box"><Image src="/img/cpa/simdhan_logo.png" alt="" layout="fill" className='resp-img' /></div>
              <div className="content-box p2">
                <p>Simandhar Education’s in house CMA exam review, taught by India’s best CPA & CMA instructors like Sripal Jain (CA, CGMA, US CPA), Surinder Kaur (CPA), Srikanth Tadikonda (CMA, CPA), Dhanashree Kshirsagar (CA, CPA),<a href="javascript:;" className="read-more">Read More</a></p>
                <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Prospectus</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentPartnerSection;