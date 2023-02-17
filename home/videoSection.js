import Image from 'next/image'

export default function videoSection() {
  return (
    <section className="section video-section">
      <div className='container'>
        <h2 className='heading02'>From the Students Who Made It Big</h2>
        <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
                <a href='#'><Image src='/img/video_big.png' layout="fill" className='resp-img'/></a>
            </div>
            <div className='video-thumbbox'>
                <div className='thumb-wrap'>
                    <div className='thumb-row'>
                        <a href='#'>
                            <i className='thumb-img resp-img-box'><Image src='/img/video_thumb.png' layout="fill" className='resp-img'/></i>
                            <div className='video-info'>
                                <h2 className='heading06'>How I scored 94 in REG | CPA USA 2019 | Sherin - Simandhar Student</h2>
                                <span>Interview</span>
                            </div>
                        </a>
                    </div>
                    <div className='thumb-row'>
                        <a href='#'>
                            <i className='thumb-img  resp-img-box'><Image src='/img/video_thumb01.png'   layout="fill" className='resp-img'/></i>
                            <div className='video-info'>
                                <h2 className='heading06'>Bcom to US CMA & US CPA Mani Venkat - Simandhar Alumni</h2>
                                <span>Placed at EY (above 9 LPA package)</span>
                            </div>
                        </a>
                    </div>
                    <div className='thumb-row'>
                        <a href='#'>
                            <i className='thumb-img resp-img-box'><Image src='/img/video_thumb.png'    layout="fill" className='resp-img'/></i>
                            <div className='video-info'>
                                <h2 className='heading06'>How I scored 94 in REG | CPA USA 2019 | Sherin - Simandhar Student</h2>
                                <span>Interview</span>
                            </div>
                        </a>
                    </div>
                    <div className='thumb-row'>
                        <a href='#'>
                            <i className='thumb-img resp-img-box'><Image src='/img/video_thumb.png'    layout="fill" className='resp-img'/></i>
                            <div className='video-info'>
                                <h2 className='heading06'>How I scored 94 in REG | CPA USA 2019 | Sherin - Simandhar Student</h2>
                                <span>Interview</span>
                            </div>
                        </a>
                    </div>
                </div>
                <a className='btn maroon-border-btn maroon-border-btn-arrow'>View More</a>
            </div>
        </div>
      </div>
      <div class="clear"></div>
    </section>
  )
}