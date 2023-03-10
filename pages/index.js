import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format'
import {useEffect,useState,useRef} from 'react' 

//components
import Banner from '../home/bannerSection'
import Usp from '../home/uspSection'
import Eduction from '../home/educationSection'
import Programm from '../home/programmSection'
import Placement from '../home/placementSection'
import Founder from '../home/founderSection'
import Video from '../home/videoSection'
import AchieversSection from '../CPA/AchieversSection'
import Partner from '../home/partnerSection'
import Award from '../home/awardSection'
import ContactUs from '../home/contactUsSection'
import OfferSection from '../home/OfferSection'
import Header from '../components/header'


// Data
import indexData from '../database/index.json'
import achieverData from '../database/data/achieversSection.json'
import videoData from '../database/data/videoSection.json'



export default function Home({showPopup}) {
const myRef = useRef();
useEffect(()=>{
console.log('mrRef',myRef.current)
},[])
  const [initialstate,finalState] = useState();
 
  return (
    <>
      <Head>
        <title>Simandhar Education</title>
      </Head>
      <Format>
        <Header  />
        <OfferSection indexData={indexData.offerRow} />
        <Banner showPopup={showPopup}/>
        <Usp />
        <Eduction  indexData={indexData.education}/>
        <Programm indexData={indexData.programTab} />
        <Placement indexData={indexData.placementAlumni} />
        <Founder />
        <Video videoData={videoData.homePage} />
        <AchieversSection achieverData={achieverData.homePage} showData={true}/>
        <Partner ref={myRef} indexData={indexData.corporateTab} />
        <Award />
        <ContactUs />
      </Format>
      
    </>
  )
}