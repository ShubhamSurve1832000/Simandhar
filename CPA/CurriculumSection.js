import Image from 'next/image'
import { Tab } from "@headlessui/react"

const CurriculumSection = () => {
  return (
    <>
      <section className="section aside-tab-section">
        <div className="aside-tab-container">
          <Tab.Group>
            <div className="left-tab-box">
              <h2 className="heading02">CPA Curriculum</h2>
              <p>The curriculum of CPA is spread across 4 subjects.</p>
              <Tab.List className='tab-header'>
                <Tab className='tab-btn active'>BEC- Business Environment Concepts</Tab>
                <Tab className='tab-btn'>AUD- Auditing and Attestation</Tab>
                <Tab className='tab-btn'>FAR- Financial Accounting and Reporting</Tab>
                <Tab className='tab-btn'>REG- Regulations</Tab>
              </Tab.List>
            </div>
            <div className="right-tab-box">
              <Tab.Panels className='tab-container'>
                <Tab.Panel className='tab-box'>
                  <div className="syllabus-row">
                    <h5 className="heading05">Duration</h5>
                    <ul className='li2'>
                      <li>4 hour Exam</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Question Pattern</h5>
                    <ul className='li2'>
                      <li>62 multiple choice questions(50% Weightage) & 5 short task-based simulations (35% Weightage),Written communication( 15% Weightage)</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Syllabus</h5>
                    <ul className='li2'>
                      <li>Corporate Governance (16% - 20%)</li>
                      <li>Economic Concepts and Analysis (16% - 20%)</li>
                      <li>Financial Management (19% - 23%)</li>
                      <li>Information Systems and Communications (15% - 19%)</li>
                      <li>Strategic Planning (10% - 14%)</li>
                      <li>Operations Management (12% - 16%)</li>
                    </ul>
                  </div>
                </Tab.Panel>
                <Tab.Panel className='tab-box'>
                  <div className="syllabus-row">
                    <h5 className="heading05">Duration</h5>
                    <ul className='li2'>
                      <li>4 hour Exam</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Question Pattern</h5>
                    <ul className='li2'>
                      <li>72 multiple choice questions (50% Weightage) & 9 short task-based simulations (50% Weightage)</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Syllabus</h5>
                    <ul className='li2'>
                      <li>Engagement Acceptance & understanding the environment (12-16%)</li>
                      <li>Understanding the entity and its environment (16-20%)</li>
                      <li>Performing Audit procedures & evaluating evidence (16-20%)</li>
                      <li>Evaluating Audit findings, communications & reporting (16-20%)</li>
                      <li>Accounting & review services engagement (12-16%)</li>
                      <li>Professional responsibilities (16-20%)</li>
                    </ul>
                  </div>
                </Tab.Panel>
                <Tab.Panel className='tab-box'>
                  <div className="syllabus-row">
                    <h5 className="heading05">Duration</h5>
                    <ul className='li2'>
                      <li>4 hour Exam</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Question Pattern</h5>
                    <ul className='li2'>
                      <li>66 multiple choice questions (50% Weightage) & 9 short task-based simulations (50% Weightage)</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Syllabus</h5>
                    <ul className='li2'>
                      <li>Conceptual Framework, Standard Setting and presentation of Financial Statements (17-23%)</li>
                      <li>Financial Statement Accounts: Recognition, Measurement, Valuation, Calculation, Presentation and Disclosures (27-33%)</li>
                      <li>Specific Transactions, Events and Disclosures: Recognition, Measurement, Valuation, Calculation, Presentation, and Disclosures (27% - 33%)</li>
                      <li>Governmental Accounting and Reporting (8% - 12%)</li>
                      <li>Not-for-Profit (Nongovernmental) Accounting and Reporting (8%-12%)</li>
                    </ul>
                  </div>
                </Tab.Panel>
                <Tab.Panel className='tab-box'>
                  <div className="syllabus-row">
                    <h5 className="heading05">Duration</h5>
                    <ul className='li2'>
                      <li>4 hour Exam</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Question Pattern</h5>
                    <ul className='li2'>
                      <li>76 multiple choice questions (50% Weightage) & 9 short task-based simulations (50% Weightage)</li>
                    </ul>
                  </div>
                  <div className="syllabus-row">
                    <h5 className="heading05">Syllabus</h5>
                    <ul className='li2'>
                      <li>Ethics, Professional, and Legal Responsibilities (15% -19%)</li>
                      <li>Business Law (17% - 21%)</li>
                      <li>Federal Tax Process, Procedures, Accounting, and Planning (11% - 15%)</li>
                      <li>Evaluating Audit findings, communications & reporting (16-20%)</li>
                      <li>Federal Taxation of Property Transactions (12% - 16%)</li>
                      <li>Federal Taxation of Individuals (13% - 19%)</li>
                      <li>Federal Taxation of Entities (18% - 24%)</li>
                    </ul>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default CurriculumSection