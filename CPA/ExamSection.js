import Image from 'next/image'
import { Tab } from "@headlessui/react"
import { useState } from 'react';

const ExamSection = () => {
  const [isActive, setActive] = useState(false);

  const showTab = () => {
    setActive(!isActive);
  };
  return (
    <>
      <section className="section exam-section">
        <div className="container-l p2">
          <div className="exam-header">
            <h2 className="heading02">CPA = US equivalent to CA</h2>
            <div className="exam-right-box">
              <span>4 exams</span><span>12-16 months timeline</span>
            </div>
          </div>
          <p>A Certified Public Accountant is a professional who has earned the CPA license from any of the 55 state accountancy boards of USA all of which are part of NASBA (National Association of the State Boards of Accountancy). Each state board has the authority to grant CPA license. One must meet all the requirements of the state board including Education, Experience and Examinations.</p>
        </div>
      </section>
      <section className="tab-section">
        <div className="container-l">
          <p className='mobile-tab' onClick={showTab}>select tab</p>
          <Tab.Group>
            <Tab.List className={'tab-header' + ' ' + (isActive ? 'active' : '')}>
              <Tab className='tab-btn active' onClick={showTab}>Eligibility Check</Tab>
              <Tab className='tab-btn' onClick={showTab}>Licensing/ Licensure</Tab>
              <Tab className='tab-btn' onClick={showTab}>Preparation</Tab>
              <Tab className='tab-btn' onClick={showTab}>Career Opportunities</Tab>
            </Tab.List>
            <Tab.Panels className='tab-container p2'>
            <Tab.Panel className='tab-box'>
                <p>The CPA Exams are administered by AICPA, the world’s largest accounting body. AICPA offers membership to all the aspirants successfully clearing all 4 CPA exams. CPA license, however is issued by the 55 state boards of accountancy of US that are part of NASBA. Each state board has different eligibility criteria, that needs to be met by the aspirant to take the US CPA exams.</p>
                <p className="med-font">General Rules of Thumb :</p>
                <ul className='li2'>
                  <li>Master’s Degree in any of the streams of Commerce, Accounting or Finance</li>
                  <li>An aspirant needs 120 credits to take the US CPA exams and 150 credits to get his CPA license</li>
                  <li>It’s considered that one year of University education in India is equal to 30 credits of US education</li>
                  <li>In some cases, first division graduates of a three-year degree from NAAC-A accredited universities of India are qualified to take the US CPA exams too.</li>
                </ul>
                <p className='pr-color mt-0'>Simandhar Education provides free eligibility check that you could use to check if you’re eligible to take the prestigious US CPA certification.</p>
                <a href="javascript:;" className="btn maroon-btn maroon-btn-arrow mt-35">Know Your Eligibility</a>
              </Tab.Panel>

              <Tab.Panel className='tab-box'>
                <p>The NASBA (National Association of State Boards of Accountancy) and the state board of accountancy governs the eligibility rules of CPA. The CPA exam requirements vary by state jurisdiction. Every state board of accountancy has a different set of requirements, but most states have a core set of qualifications for a candidate to be eligible for the CPA exam.</p>
                <p className="med-font">Let’s go through the CPA license requirements.</p>
                <ul className='li2'>
                  <li>In general, many states ask for <span className="med-font">150 credit hours</span> in some specific courses from a university or an accredited institute under NASBA.</li>
                  <li>The candidate should <span className="med-font">pass the Ethics exam</span>.</li>
                  <li>Must have 2,000 hours of work experience in taxation, auditing, accounting and management consultancy (need not be under a CPA supervisor, <span className="med-font">Mr.Sripal Jain (CA,CPA) can verify for you)</span>.</li>
                  <li>Age limit: <span className="med-font">18+ years</span>.</li>
                </ul>
                <p><span className="med-font">Besides the above requirements, the candidate must have a bachelor’s degree in Commerce/Accounting/Business with any of the below qualifications:</span></p>
                <ul className='li2'>
                  <li>Member of the “Institute of Costs & Works Accountants in India.”</li>
                  <li>Member of the “Institute of Chartered Accountants of India.”</li>
                  <li>Member of the “Company Secretaries in India.”</li>
                  <li>MBA.</li>
                  <li>Master of Commerce.</li>
                </ul>
                
              </Tab.Panel>
              
              <Tab.Panel className='tab-box'>
              <p className="med-font">Simandhar + Becker</p>
                <p className="med-font">Simandhar LMS</p>
                <p className='mt-0'>Simandhar Education has its own CPA exam review, taught by India’s best CPA instructors like Sripal Jain (CA, CGMA, US CPA), Surinder Kaur (CPA), Srikanth Tadikonda (CMA, CPA), Dhanashree Kshirsagar (CA, CPA), Heena Vithlani (CA,CPA,IFRS with ACCA), Karan Nathvani (CA,MBA-IIM Indore, CISA, CCSK) Amit Kumar Gupta (ACA,ACS,CMA) Sudha Murthy (CA) and Suraj Lakhotia (CA, CIMA). Simandhar has helped hundreds of CPA aspirants clear their CPA exams in India.</p>
                <p className="med-font">Why Simandhar LMS + Becker?</p>
                <p className='mt-0'>Simandhar CPA LMS coupled with Becker CPA review makes sure that you get all the nourishment required to tackle your CPA exams. The combination ensures that you leave no stone unturned. Along with the regular classes, Simandhar extends support to aspirants through revision classes that have been a hit for a long time among the Indian CPA fraternity.</p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default ExamSection;