import Image from 'next/image'
import { Tab } from "@headlessui/react"
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'


export default function programmSection({ indexData }) {
  const [isActive, setActive] = useState(false);
 
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
                      <ul className='custom-scrollbar'>
                  {
                    lists.lists.map((list =>{
                      return <li> {list.list}</li>
                    }))
                  }

      
                      </ul>
                      <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                    </div>
                  </Tab.Panel>
                }))
              }



            </div>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </section >
  )
}