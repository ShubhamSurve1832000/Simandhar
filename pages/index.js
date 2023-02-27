import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format'

//components
import Banner from '../home/bannerSection'
import Usp from '../home/uspSection'
import Eduction from '../home/educationSection'
import Programm from '../home/programmSection'
import Placement from '../home/placementSection'
import Founder from '../home/founderSection'
import Video from '../home/videoSection'
import Achievers from '../home/achieversSection'
import Partner from '../home/partnerSection'
import Award from '../home/awardSection'
import ContactUs from '../home/contactUsSection'
import OfferSection from '../home/OfferSection'


export default function Home({showPopup}) {
  return (
    <>
      <Head>
        <title>Simandhar Education</title>
      </Head>
      <Format>
        <OfferSection />
        <Banner showPopup={showPopup}/>
        <Usp />
        <Eduction />
        <Programm />
        <Placement />
        <Founder />
        <Video />
        <Achievers />
        <Partner />
        <Award />
        <ContactUs />
     
       
      </Format>
      
    </>
  )
}