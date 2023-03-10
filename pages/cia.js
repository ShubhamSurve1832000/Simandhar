import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import BannerSection from '../CPA/BannerSection'
import ExamSection from '../CPA/ExamSection'
import HelpSection from '../CPA/HelpSection'
import CurriculumSectionone from '../CPA/CurriculumSectionone'
import ContentPartnerSection from '../CPA/ContentPartnerSection'
import TableSection from '../CPA/ciaTableone'
import Trainer from '../CPA/trainer'
import CiaTabelTwo from '../CPA/ciaTabelTwo'
import CiaTabelThree from '../CPA/CiaTabelThree'

import FaqSection from '../CPA/FaqSection'

import bannerData from '../database/data/banner.json'
import examData from '../database/data/exam.json'
import helpData from '../database/data/helpSection.json'
import CurriculumSectiononeData from '../database/data/curriculumsectionOne.json'
import contentPartnerData from '../database/data/contentSection.json'
import trainerData from '../database/data/trainerData.json'

const cia = () => {
  return (
    <>
      <Head>
        <title>CIA - Simandhar Education</title>
      </Head>
      <Header />
      <div className="banner-ciaPage">
      <BannerSection bannerData={bannerData.ciaPage} />
      </div>
      <div className='cia-exam-section pb-8'>
        <ExamSection examData={examData.ciaPage} />
      </div>
      <div className='cia-exam-section black-bag '>
        <ExamSection examData={examData.ciaPageone} />
      </div>
      <div className='background-none key-takeways pt-8 cia-help-section' >
        <HelpSection helpData={helpData.ciaPage} />
      </div>
      <div className='cia-tab cma-tab'>
        <CurriculumSectionone CurriculumSectiononeData={CurriculumSectiononeData.cmaPage} />
      </div>
      <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true}/>
      <TableSection/>
      <Trainer trainerData={trainerData.ciaPage}/>
      <CiaTabelTwo/>
      <CiaTabelThree/>


      <FaqSection/>
    </>

  )
}

export default cia