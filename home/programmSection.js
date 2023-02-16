
import { Tab } from "@headlessui/react"

export default function programmSection() {
  return (
    <section className="section programm-section">
      <Tab.Group>
        <div className='container programm-container'>
          <div className='pro-leftbox'>
            <h2 className='heading02'>Our Programmes</h2>
            <p>Kickstart Your Career in Accounting & Finance</p>
            <Tab.List className='tab-head-box'>
              <Tab className='tab-button'>US CPA</Tab>
              <Tab className='tab-button active'>US CMA</Tab>
              <Tab className='tab-button'>EA</Tab>
              <Tab className='tab-button'>CIA</Tab>
              <Tab className='tab-button'>DA</Tab>
              <Tab className='tab-button'>SSP</Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <div className='pro-rigbhbox'>
              <Tab.Panel>
                <div className='tab-box'>
                  <h4 className='heading04'>Earn it in 6-9 Months Jobs in BIG 1s and MNCs</h4>
                  <ul>
                    <li>2 exams within 9-10 months</li>
                    <li>Placements Assistance at Big 3s & US-based MNCs</li>
                    <li>Success coaching and live classes by Experts</li>
                    <li>Scholarships for students (Pursuing CMA alongside University degree)</li>
                    <li>Live & recorded sessions</li>
                  </ul>
                  <a href="#" className='btn maroon-btn maroon-btn-arrow'>Course Detail</a>
                </div>
              </Tab.Panel>
              <Tab.Panel>
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
              </Tab.Panel>
            </div>
          </Tab.Panels>
          
        </div>
      </Tab.Group>
    </section >
  )
}
