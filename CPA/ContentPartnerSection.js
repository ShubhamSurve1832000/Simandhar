import Image from 'next/image'

const ContentPartnerSection = ({ contentPartnerData, showData }) => {
  return (
    <>
      <section className="section cont-partner-section">
        <div className="container-l">
          <h2 className="heading02">{contentPartnerData.mainHeading}</h2>
          <div className="cont-partner-container">

            {contentPartnerData.repeats.map((partnerData => {
              return <div className="cont-partner-row">
                <div className="logo-box resp-img-box"><Image src={partnerData.img} alt="" layout="fill" className='resp-img' /></div>
                <div className="content-box p2">
                  <p>{partnerData.para} <a href="javascript:;" className="read-more">{partnerData.readBtn}</a></p>
                  {
                    showData ? (
                 
                  <ul className='hiii'>
                    {
                      contentPartnerData.lists.map((item => {
                        return  <li className='hello'>{item.list}</li>
                      }))
                    }
                  </ul>
                  ) :('')
                   }
                  <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">{partnerData.btn}</a>
                </div>
              </div>
            }))}



            {/* <div className="cont-partner-row">
              <div className="logo-box resp-img-box"><Image src="/img/cpa/simdhan_logo.png" alt="" layout="fill" className='resp-img' /></div>
              <div className="content-box p2">
                <p>Simandhar Education’s in house CMA exam review, taught by India’s best CPA & CMA instructors like Sripal Jain (CA, CGMA, US CPA), Surinder Kaur (CPA), Srikanth Tadikonda (CMA, CPA), Dhanashree Kshirsagar (CA, CPA),<a href="javascript:;" className="read-more">Read More</a></p>
                <a href="javascript:;" className="btn maroon-btn maroon-arrow-btn">Download Prospectus</a>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </>
  )
}

export default ContentPartnerSection;