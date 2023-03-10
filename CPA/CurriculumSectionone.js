import Image from 'next/image'
import { Tab } from "@headlessui/react"

const CurriculumSectionone = ({ CurriculumSectiononeData, showData }) => {
  return (
    <>
      <section className="section aside-tab-section">
        <div className="aside-tab-container">
          <Tab.Group>
            <div className="left-tab-box">
              <Tab.List className='tab-header'>
                {CurriculumSectiononeData.tab_button.map((pass => {
                  return <>
                    <Tab className='tab-btn active'>{pass.name}</Tab></>
                }))}
              </Tab.List>
            </div>
            <div className="right-tab-box r">
              <Tab.Panels className='tab-container custom-scrollbar'>
                {CurriculumSectiononeData.tab_lists.map((passData => {
                  return <>
                    <Tab.Panel className='tab-box'>
                      {passData.tab_list.map((list => {
                        return <>
                          <div className="row">
                            <div className="number">{list.id}</div>
                            <div className="heading05">{list.txt}</div>
                          </div></>
                      }))}
                    </Tab.Panel>
                  </>
                }))}




              </Tab.Panels>
              <p>Scroll to view more </p>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default CurriculumSectionone