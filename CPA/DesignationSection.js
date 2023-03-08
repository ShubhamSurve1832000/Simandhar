import React from 'react'

const DesignationSection = ({ contentPartnerData, shortHeading }) => {
    return (
        <>
            <section className='designation-section container-l p2'>
                <h2 className='heading02'>{contentPartnerData.mainHeading}</h2>
                <p className="pr-color">{contentPartnerData.discription}</p>
                <div className='designation-list '>

                    {
                        shortHeading ? (
                            <p className="med-font">{contentPartnerData.shortHeading}</p>
                        ) : ("")
                    }


                    <ul>
                        {
                            contentPartnerData.lists.map((item => {
                                return <li className='heading05'>{item.list}</li>
                            }))
                        }
                        {/* <li className='heading05'>Career Avenues</li>
                        <li className='heading05'>International Recognition</li>
                        <li className='heading05'> Global Qualification</li>
                        <li className='heading05'> In-depth knowledge about Management Accounting, Finance, Business Economics and Management concepts required for a business professional</li>
                        <li className='heading05'> Elite Network of CPAs</li>
                        <li className='heading05'>Elite Network of CMAs</li> */}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default DesignationSection