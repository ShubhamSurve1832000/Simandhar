import Head from 'next/head'
//components
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import JournerySection from '../CPA/JournerySection'
import OnlineCourseSection from '../CPA/OnlineCourseSection'
import CurriculumSection from '../CPA/CurriculumSection'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import FaqSection from '../CPA/FaqSection'
import HelpSection from '../CPA/HelpSection'
import PlacementSection from '../CPA/PlacementSection'
import ProgrammTableSection from '../CPA/ProgrammTableSection'
import AchieversSection from '../CPA/AchieversSection'
import CareerSection from '../CPA/CareerSection'
import CpaProgram from '../components/CpaProgram'
// import Exam from './examSection'
// import Journery from './journerySection'
// import OnlineCourse from './onlineCourseSection'
// import Curriculum from './curriculumSection'
// import Table from './programmTableSection'
// import ContentPartner from './contentPartnerSection'
// import Help from './helpSection'
// import Career from './careerSection'
// import Achievers from './achieversSection'
// import Placement from './placementSection'
// import Faq from './faqSection'
import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'
import exam from '../database/data/exam.json'
import journeyData from '../database/data/journeySection.json'




export default function CPA() {
  return (
    <>
    <Head>
      <title>US CPA - Simandhar Education</title>
    </Head>
			<div id="page-container">
				<main className='main' id='main'>
          <CpaProgram />
          <BannerSection bannerData={bannerData.cpaPage}/>
          <ExamSection />
          <JournerySection journeyData={journeyData.cpaPage}/>
          <OnlineCourseSection/>
          <CurriculumSection/>
          <ProgrammTableSection />
          <ContentPartnerSection/>
          <HelpSection helpData={helpData.cpaPage}/>
          <CareerSection/>
          <AchieversSection/>
          <PlacementSection/>
          <FaqSection/>
        </main>
			</div>
		</>
  )
}