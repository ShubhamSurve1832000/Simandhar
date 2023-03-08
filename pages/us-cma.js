import React from 'react'
import Head from 'next/head'
import BannerSection from '../CPA/BannerSection'
import HelpSection from '../CPA/HelpSection'
import AchieversSection from '../CPA/AchieversSection'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import DesignationSection from '../CPA/DesignationSection'
import ExamSection from '../CPA/ExamSection'
import CpaProgram from '../components/CpaProgram'
import FaqSection from '../CPA/FaqSection'
import CurriculumSectionone from '../CPA/CurriculumSectionone'
import TableSection from '../CPA/tableSection'
import Header from '../components/header'



import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'
import achieverData from '../database/data/achieversSection.json'
import contentPartnerData from '../database/data/contentSection.json'
import examData from '../database/data/exam.json'
import CurriculumSectiononeData from '../database/data/curriculumsectionOne.json' 
import ProgramData from '../database/data/program.json'

export default function CMA() {
  return (
    <>
      <Head>
        <title>US CMA - Simandhar Education</title>
      </Head>
      <div className="width-50">
      <Header  showData1={true} />
      </div>
      {/* <CpaProgram /> */}
      <BannerSection bannerData={bannerData.cmaPage} />
      <div className='cma-exam-section'>
      <ExamSection examData={examData.cmaPage} /></div>
      <div className='background-none key-takeways' > <HelpSection helpData={helpData.cmaPage} /></div>
      <DesignationSection contentPartnerData={contentPartnerData.designation} />

      <div className='cma-tab'>
      <CurriculumSectionone CurriculumSectiononeData={CurriculumSectiononeData.cmaPage} />
      </div>

      <ContentPartnerSection contentPartnerData={contentPartnerData.cmaPage} />
      <div className='cma-help'>
      <HelpSection helpData={helpData.cmaPageone} />
      </div>
      <div className='background-none '> <HelpSection helpData={helpData.takeaWays} /></div>
      <div className='text-center'> <AchieversSection achieverData={achieverData.cmaPage}  /></div>
      <TableSection />
      <FaqSection/>

      

    </>
  )
}
