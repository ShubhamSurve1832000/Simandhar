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
import Header from '../components/header'



import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'
import achieverData from '../database/data/achieversSection.json'
import contentPartnerData from '../database/data/contentSection.json'
import examData from '../database/data/exam.json'


export default function EA() {
  return (
    <>
      <Head>
        <title>US CMA - Simandhar Education</title>
      </Head>
      <Header />
      {/* <CpaProgram /> */}
      <BannerSection bannerData={bannerData.eaPage} />
      <div className='cma-exam-section'>
      <ExamSection examData={examData.eaPage} /></div>
      <div className='background-none ea-page'> <HelpSection helpData={helpData.takeaWays} /></div>
      <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true}/>
      <div className='text-center'> <AchieversSection achieverData={achieverData.eaPage} showData={false} /></div>
      <FaqSection/>

      

    </>
  )
}
