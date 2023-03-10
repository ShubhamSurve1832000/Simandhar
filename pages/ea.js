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
import Gallery from '../CPA/Gallery'
import CurriculumSection from '../CPA/CurriculumSection'
import Video from '../home/videoSection'





import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'
import achieverData from '../database/data/achieversSection.json'
import contentPartnerData from '../database/data/contentSection.json'
import examData from '../database/data/exam.json'
import curriculumData from '../database/data/CurriculumData.json'
import videoData from '../database/data/videoSection.json'
import galleryData from '../database/data/gallerySection.json'
import EaCourseTable from '../CPA/EaCourseSection'



export default function EA() {
  return (
    <>
      <Head>
        <title>EA - Simandhar Education</title>
      </Head>
      <Header />
      {/* <CpaProgram /> */}
      <BannerSection bannerData={bannerData.eaPage} />
      <div className='cma-exam-section'>
      <ExamSection examData={examData.eaPage} /></div>
      <div className='background-none ea-page'> <HelpSection helpData={helpData.takeaWays} /></div>
      <Gallery galleryData={galleryData.eaGallery} />
    <div className='ea-curriculum'>
      <CurriculumSection curriculumData={curriculumData.eaPage}/>
    </div>
      
      <ContentPartnerSection contentPartnerData={contentPartnerData.eaPage} showData={true}/>
      <EaCourseTable />
      <div className='text-center'> <AchieversSection achieverData={achieverData.eaPage} showData={false} /></div>
      <Video videoData={videoData.eaPage} />
      <FaqSection/>

      

    </>
  )
}
