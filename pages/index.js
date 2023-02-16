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

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Format>
        <Banner />
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
      <a href='#' className='chat-icon'><Image src="/img/chat.png" alt="" width={122} height={135} /></a>
    </>
  )
}