import Image from 'next/image'

export default function founderSection() {
  return (
    <section className=" founder-section pb-0">
      <div className='founder-container'>
        <div className='founder-info'>
            <h2 className='heading02'>From the Founder's Desk</h2>
            <div className='founder-innerbox'>
                <p>We believe that education has the ability to transform every individual. Today's students don't just need information to be educated, they also need an overall transformation to be successful in life.</p>
                <h3 className='heading04'>“Education is not information,it's transformation"</h3>
                <h5 className='heading05'>Sripal Jain CA, CPA, CGMA</h5>
                <p>(Equivalent to UK CMA)</p>
                <p>Co-Founder & Lead Instructor, Simandhar Education, Guest Faculty, IIM Winner of Best Edupreneur Award, Telangana Region</p>
            </div>
        </div>
      </div>
      <div class="clear"></div>
    </section>
  )
}