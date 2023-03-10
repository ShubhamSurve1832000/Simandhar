import Image from 'next/image'
import { Tab } from '@headlessui/react'

export default function videoSection({ videoData }) {
  return (
    <section className="section video-section">
      <div className='container'>
        <h2 className='heading02'>{videoData.mainheading}</h2>
        <Tab.Group>
          <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
              <Tab.Panels>
                {
                  videoData.videos.map((video => {
                    return (<Tab.Panel>
                      <iframe src={video.path} frameborder="0" allowfullscreen></iframe>
                    </Tab.Panel>
                    )
                  }))
                }


                {/* <Tab.Panel>
                  <iframe src="https://www.youtube.com/embed/G5UTAcstmCI" frameborder="0" allowfullscreen></iframe>
                </Tab.Panel> */}


                {/* <Tab.Panel>
                <iframe  src="https://www.youtube.com/embed/3rEAl2T7M98" frameborder="0" allowfullscreen></iframe>
                </Tab.Panel>
                <Tab.Panel>
                <iframe  src="https://www.youtube.com/embed/lf0ohX8r2w0" frameborder="0" allowfullscreen></iframe>
                </Tab.Panel> */}
              </Tab.Panels>
            </div>
            <div className='video-thumbbox'>
              <Tab.List className='thumb-wrap custom-scrollbar'>

                {
                  videoData.tabs.map((tabdata => {
                    return (
                      <Tab className='thumb-row'>
                        <i className='thumb-img  resp-img-box'><Image src={tabdata.path} layout="fill" className='resp-img' /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>{tabdata.heading}</h2>
                          <span>{tabdata.span}</span>
                        </div>
                      </Tab>
                    )
                  }))

                  // <Tab className='thumb-row'>
                  //   <i className='thumb-img  resp-img-box'><Image src='/img/video_thumb01.png' layout="fill" className='resp-img' /></i>
                  //   <div className='video-info'>
                  //     <h2 className='heading06'>CA final to CPA| Cleared CPA exam in 8.5 months | Supriya | Simandhar CPA alumni</h2>
                  //     <span>Placed at EY (above 9 LPA package)</span>
                  //   </div>
                  // </Tab>
                }

                {/* <Tab className='thumb-row'>

                  <i className='thumb-img resp-img-box'><Image src='/img/video_thumb02.jpg' layout="fill" className='resp-img' /></i>
                  <div className='video-info'>
                    <h2 className='heading06'>Bcom to US CMA & US CPA| Mani Venkat- Simandhar Alumni| Placed at EY</h2>
                    <span>Interview</span>
                  </div>

                </Tab>
                <Tab className='thumb-row'>

                  <i className='thumb-img resp-img-box'><Image src='/img/video_thumb03.jpg' layout="fill" className='resp-img' /></i>
                  <div className='video-info'>
                    <h2 className='heading06'>How I scored 94 in REG | CPA USA 2019 | Sherin - Simandhar Student</h2>
                    <span>Interview</span>
                  </div>

                </Tab> */}
              </Tab.List>
              <a className='btn maroon-border-btn maroon-border-btn-arrow'>View More</a>
            </div>
          </div>
        </Tab.Group>
      </div>
      <div class="clear"></div>
    </section>
  )
}