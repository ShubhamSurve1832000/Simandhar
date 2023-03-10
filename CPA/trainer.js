import React from 'react'

const trainer = ({ trainerData }) => {
    return (
        <section className='trainer-section pb-8'>
            <div className="container-l">
                <div className="box">
                    <div className="right_box">
                        <h2 class="heading02">{trainerData.mainheading}</h2>
                        <div className="txt">

                            {trainerData.para.map((pass => {
                                return  <p>{pass.text}</p>
                                   
                            }))}
                        </div>
                    </div>
                    <div className="left_box">
                        <img src={trainerData.img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default trainer