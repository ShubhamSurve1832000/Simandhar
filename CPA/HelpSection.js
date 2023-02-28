import Image from 'next/image'

const HelpSection = ({helpData}) => {
  return (
    <>
      <section className="section help-section">
        <div className="container-l">
          <h2 className="heading02">{helpData.mainheading}</h2>
          <div className="help-container">
          {helpData.helps.map((item => {
              return <dl>
                <dt><Image src={item.img} alt="" layout="fill" className='resp-img' /></dt>
                <dd>{item.caption}</dd>
              </dl>
            }))}
            {/* <dl>
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
            </dl> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default HelpSection