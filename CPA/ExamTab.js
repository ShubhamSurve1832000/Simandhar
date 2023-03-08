import React from 'react'
import { Tab } from "@headlessui/react"
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri'

const ExamTab = ({ tabData }) => {
  const [isActive, setActive] = useState(false);
  const data = [{ id: 0, label: "Eligibility Check" }, { id: 1, label: "Licensing/ Licensure" }, { id: 2, label: "Preparation" }, { id: 3, label: "Career Opportunities" }];

  const showTab = () => {
    setActive(!isActive);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItem] = useState(data);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setActive(!isActive);
  }
  return (
    <section className=" tab-section">
      <div className="container-l">
        <p className='tab-button-mobile tab-btn' onClick={showTab}>{selectedItem ? items.find(item => item.id == selectedItem).label : "Select Programs"}<span ><RiArrowDropDownLine /></span></p>

        <Tab.Group>
          <Tab.List className={'tab-header' + ' ' + (isActive ? 'active' : '')}>
            {data.map((pass => {
              return <Tab className="tab-btn" onClick={e => handleItemClick(e.target.id)} id={pass.id}>{pass.label}</Tab>
            }))}
          </Tab.List>
          <Tab.Panels className='tab-container p2'>
            {tabData.description.map((desc => {
              return <>
                <Tab.Panel className='tab-box'>
                  <p>{desc.para}</p>
                  <p className="med-font">{desc.title}</p>
                  <ul className='li2'>
                    {desc.lists.map((item => {
                      return <li>{item.list}</li>
                    }))}
                  </ul>
                  <p className='pr-color mt-0'>{desc.paraTwo}</p>
                  <ul className='li2'>
                    {desc.lists1.map((items => {
                      
                      return <li>{items.list}</li>
                    }))}
                  </ul>
                  <a href="javascript:;" className="btn maroon-btn maroon-btn-arrow mt-35">{desc.button}</a>
                </Tab.Panel>
              </>
            }))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>

  )
}

export default ExamTab