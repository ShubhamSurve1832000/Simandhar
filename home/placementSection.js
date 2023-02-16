import Image from 'next/image'

export default function placementSection() {
  return (
    <section className="section pm-section">
      <div className='container'>
        <h2 className='heading02'>Placements & Alumni</h2>
        <div className='pm-container'>
            <div className='pm-box'>
                <figure>
                    <div className='pm-img resp-img-box'>
                        <Image src="/img/place_img01.png" layout="fill" className='resp-img' alt=''/>
                    </div>
                    <figcaption>
                        <h6>Anoushka Baghla</h6>
                        <p>US CPA License</p>
                    </figcaption>
                </figure>
                <a href="#" className='btn maroon-btn maroon-btn-arrow'>View CPA Licensee</a>
            </div>
            <div className='pm-box'>
                <figure>
                    <div className='pm-img resp-img-box'>
                        <Image src="/img/place_img02.png" layout="fill" className='resp-img' alt=''/>
                    </div>
                    <figcaption>
                        <h6>Shrikesh Lahoti</h6>
                        <p>US CPA, Deloitte, Mumbai</p>
                    </figcaption>
                </figure>
                <a href="#" className='btn maroon-border-btn maroon-border-btn-arrow'>View All Placements</a>
            </div>
            <div className='pm-box'>
                <figure>
                    <div className='pm-img resp-img-box'>
                        <Image src="/img/place_img03.jpg" layout="fill" className='resp-img' alt=''/>
                    </div>
                    <figcaption>
                        <h6>Dhruv Patel</h6>
                        <p>FAR-98 - BEC-98 - REG-91 - AUD-97</p>
                    </figcaption>
                </figure>
                <a href="#" className='btn maroon-border-btn maroon-border-btn-arrow'>View All Toppers</a>
            </div>
        </div>
      </div>
    </section>
  )
}