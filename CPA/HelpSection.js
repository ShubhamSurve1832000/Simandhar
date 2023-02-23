import Image from 'next/image'

const HelpSection = () => {
  return (
    <>
      <section className="section help-section">
        <div className="container-l">
          <h2 className="heading02">How Simandhar Education helps you <br/> to be US CPA ready</h2>
          <div className="help-container">
            <dl>
              <dt><Image src="/img/cpa/help_icon01.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>Comprehensive Study <br/> Material</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon02.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>End to End Evaluation <br/> Assistance</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon03.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>Last Minute <br/> Revision</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon04.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>AI Mocks</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon05.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>Live <br/> Interactive Classes</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon06.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>Customer <br/> First Approach</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon07.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>Course <br/> Training</dd>
            </dl>
            <dl>
              <dt><Image src="/img/cpa/help_icon08.svg" alt="" layout="fill" className='resp-img' /></dt>
              <dd>Professional <br/> Training</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}

export default HelpSection