import Image from 'next/image'

export default function placementSection({indexData}) {
  return (
    <section className="section pm-section">
      <div className='container'>
        <h2 className='heading02'>Placements & Alumni</h2>
        <div className='pm-container'>
            {
                indexData.list.map(( data =>{
            return <div className='pm-box'>
                <figure>
                    <div className='pm-img resp-img-box'>
                        <Image src={data.img} layout="fill" className='resp-img'/>
                    </div>
                    <figcaption>
                        <h6>{data.name}</h6>
                        <p>{data.course}</p>
                    </figcaption>
                </figure>
                <a href="#" className='btn maroon-border-btn maroon-border-btn-arrow'>{data.btn}</a>
            </div>
            }))
            }
            
            {/* <div className='pm-box'>
                <figure>
                    <div className='pm-img resp-img-box'>
                        <Image src="/img/place_img02.png" layout="fill" className='resp-img'/>
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
                        <Image src="/img/place_img03.jpg" layout="fill" className='resp-img'/>
                    </div>
                    <figcaption>
                        <h6>Dhruv Patel</h6>
                        <p>FAR-98 - BEC-98 - REG-91 - AUD-97</p>
                    </figcaption>
                </figure>
                <a href="#" className='btn maroon-border-btn maroon-border-btn-arrow'>View All Toppers</a>
            </div> */}
        </div>
      </div>
    </section>
  )
}