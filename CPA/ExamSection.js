import Image from 'next/image'


const ExamSection = ({ examData, showStrip }) => {


  return (
    <>
      <section className="section exam-section">
        <div className="container-l p2">
          <div className="exam-header">
            <h2 className="heading02">{examData.mainHeading}</h2>

            {
              showStrip ? (
                <div className="exam-right-box">
                  <span>{examData.txtone}</span><span>{examData.txttwo}</span>
                </div>
              ) : ("")
            }


          </div>
          <p className='pr-color'>{examData.description}</p>
        </div>
      </section>


   
    </>
  )
}

export default ExamSection;