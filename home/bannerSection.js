import Image from 'next/image'

export default function bannerSection() {
  return (
    <section className="banner-section flex">
      <div className="left-box resp-img-box">
      <Image src="/img/ad_banner.png" alt="" layout="fill" className='resp-img'/>
      </div>
      <div className="right-box">
        <div className="banner-content">
          <div class="banner-text">
            <h1 className='banner-title'>Get into <span>Big 4s and MNCs</span> with the most trusted institute of India</h1>
            <p>We believe that education has the ability to transform every individual.</p>
          </div>
          <a href="#" className='btn maroon-btn'>Enquire Now 
          <i className='btn-arrow'><Image src="/img/arrow_white.svg" alt="" width={14} height={14}/></i></a>
        </div>
      </div>
      <div class="sticky-box">
        <a href="#" className='resp-img-box'><Image src="/img/phone.png" alt="" layout="fill" className='resp-img'/></a>
        <a href="#" className='resp-img-box'><Image src="/img/email.png" alt="" layout="fill" className='resp-img'/></a>
        <a href="#" className='wa-icon resp-img-box'><Image src="/img/whatsapp.png" alt=""  layout="fill" className='resp-img'/></a>
        <button className='enq-btn resp-img-box'>
          <Image src="/img/enquire_now.svg" alt="" layout="fill" className='resp-img'/>
        </button>
      </div>
    </section>
  )
}
