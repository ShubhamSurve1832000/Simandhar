import Image from 'next/image'

export default function educationSection({indexData}) {
  return (
    <section className="section education-section">
      <div className='container eduction-container'>
        <div className='info-box'>
            <h2 className='heading03'>{indexData.mainheading}</h2>
            <p>{indexData.description}</p>
            <div className='edubox-wrap'>
                <div className='edu-row'>
                    <span className='edu-tab'>{indexData.list1}</span>
                    <span className='edu-tab'>{indexData.list2}</span>
                </div>
                <div className='edu-row'>
                    <span className='edu-tab'>{indexData.list3}</span>
                    <span className='edu-tab'>{indexData.list4}</span>
                    <span className='edu-tab'>{indexData.list5}</span>
                </div>
            </div>    
        </div>
        <div className='edu-adbox'>
            <div className='adbox resp-img-box'>
                <Image src={indexData.img1} layout="fill" className='resp-img'/>
            </div>
            <div className='adbox resp-img-box'>
                <Image src={indexData.img2} layout="fill" className='resp-img'/>
            </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>
  )
}