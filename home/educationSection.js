import Image from 'next/image'

export default function educationSection() {
  return (
    <section className="section education-section">
      <div className='container eduction-container'>
        <div className='info-box'>
            <h2 className='heading03'>Why Simandhar Education?</h2>
            <p>Simandhar Education is India's Most Trusted Training Institute for US CPA, US CMA, Diploma IFRS, and Enrolled Agent.</p>
            <div className='edubox-wrap'>
                <div className='edu-row'>
                    <span className='edu-tab'>CPA bridge course to meet the shortfall of credits</span>
                    <span className='edu-tab'>200+ <br/> Placement Partners</span>
                </div>
                <div className='edu-row'>
                    <span className='edu-tab'>10000+ <br/> Students</span>
                    <span className='edu-tab'>15+ <br/> Faculties</span>
                    <span className='edu-tab'>End-to-end Licensing Support</span>
                </div>
            </div>    
        </div>
        <div className='edu-adbox'>
            <div className='adbox resp-img-box'>
                <Image src="/img/education01.png" layout="fill" className='resp-img' alt=''/>
            </div>
            <div className='adbox resp-img-box'>
                <Image src="/img/education02.png" layout="fill" className='resp-img' alt=''/>
            </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>
  )
}