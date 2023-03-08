import Image from 'next/image'
import { Tab } from "@headlessui/react"
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'


export default function programmSection({ indexData }) {
  const [isActive, setActive] = useState(false);
  // const data = [{ id: 0, label: "US CPA" }, { id: 1, label: "US CMA" }, { id: 2, label: "EA" }, { id: 3, label: "CIA" }, { id: 4, label: "Data Analytics" },{ id: 5, label: "Simandhar Saamarth" }];
  const showTab = () => {
    setActive(!isActive);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItem] = useState(indexData);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setActive(!isActive);
  }
  return (
    <section className="section programm-section">
      <Tab.Group>
        <div className='container programm-container'>
          <div className='pro-leftbox '>
            <h2 className='heading02'>{items.mainheading}</h2>
            <p>{items.subheading}</p>
            <div className='tab-head-row custom-scrollbar '>

              <p className='tab-button-mobile' onClick={showTab}>{selectedItem ? items.programTitle.find(item => item.id == selectedItem).label : "Select Exams"}<span className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}><RiArrowDropDownLine /></span></p>
              <Tab.List className={'tab-head-box ' + ' ' + (isActive ? 'active' : '')}>
                {items.programTitle.map(item => (
                  <Tab className="tab-button" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                    {item.label}
                  </Tab>
                ))}



                {/* <Tab className='tab-button' onClick={e => handleItemClick(e.target.id)} id={item.id}>US CPA</Tab>
                <Tab className='tab-button active' onClick={e => handleItemClick(e.target.id)} id={item.id}>US CMA</Tab>
                <Tab className='tab-button' onClick={showTab}>EA</Tab>
                <Tab className='tab-button' onClick={showTab} >CIA</Tab>
                <Tab className='tab-button' onClick={showTab} >Data Analytics</Tab>
                <Tab className='tab-button' onClick={showTab} >Simandhar Saamarth</Tab> */}
              </Tab.List>
            </div>
          </div>
          <Tab.Panels>
            <div className='pro-rigbhbox'>
              {
                items.programContent.map((lists => {
                  return <Tab.Panel>
                    <div className='tab-box'>
                      <h4 className='heading04'>{lists.programdesc}</h4>
                      <ul>
                  {
                    lists.lists.map((list =>{
                      return <li> {list.list}</li>
                    }))
                  }

                        {/* <li>2 exams within 9-10 months</li>
                        <li>Placements Assistance at Big 3s & US-based MNCs</li>
                        <li>Success coaching and live classes by Experts</li>
                        <li>Scholarships for students (Pursuing CMA alongside University degree)</li>
                        <li>Live & recorded sessions</li> */}
                      </ul>
                      <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                    </div>
                  </Tab.Panel>
                }))
              }



              {/* <Tab.Panel>
                <div className='tab-box'>
                  <h4 className='heading04'>Earn it in 6-9 Months Jobs in BIG 2s and MNCs</h4>
                  <ul>
                    <li>2 exams within 9-10 months</li>
                    <li>Placements Assistance at Big 4s & US-based MNCs</li>
                    <li>End-to-end CMA Licensing Support</li>
                    <li>Study material from Becker</li>
                    <li>Support for IMA registration, IMA Scholarship for US CMA pursuing from university</li>
                  </ul>
                  <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='tab-box'>
                  <h4 className='heading04'>Earn it in 6-9 Months Jobs in BIG 3s and MNCs</h4>
                  <ul>
                    <li>3 parts within 8-10 months</li>
                    <li>Success coaching & live classes by Experts</li>
                    <li>100% Placement Assistance</li>
                    <li>End-to-end EA Licensing Support</li>
                    <li>Placements at Big 4 & US-based MNCs</li>
                  </ul>
                  <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='tab-box'>
                  <h4 className='heading04'>Earn it in 6-9 Months Jobs in BIG 4s and MNCs</h4>
                  <ul>
                    <li>3 parts within 8-10 months</li>
                    <li>End-to-end assistance</li>
                    <li>Placement assistance at Big 4s & US-based MNCs</li>
                    <li>Support for CIA registration with IIA</li>
                    <li>Gleim Access (test banks and MCQs)</li>
                    <li>Corporate grooming session</li>
                  </ul>
                  <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='tab-box'>
                  <h4 className='heading04'>Earn it in 6-9 Months Jobs in BIG 5s and MNCs</h4>
                  <ul>
                    <li>27 exams within 9-10 months</li>
                    <li>Placements Assistance at Big 7s & US-based MNCs</li>
                    <li>Success coaching and live classes by Experts</li>
                    <li>Scholarships for students (Pursuing CMA alongside University degree)</li>
                    <li>Live & recorded sessions</li>
                  </ul>
                  <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='tab-box'>
                  <h4 className='heading04'>Earn it in 6-9 Months Jobs in BIG 6s and MNCs</h4>
                  <ul>
                    <li>28 exams within 9-10 months</li>
                    <li>Placements Assistance at Big 8s & US-based MNCs</li>
                    <li>Success coaching and live classes by Experts</li>
                    <li>Scholarships for students (Pursuing CMA alongside University degree)</li>
                    <li>Live & recorded sessions</li>
                  </ul>
                  <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                </div>
              </Tab.Panel> */}
            </div>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </section >
  )
}