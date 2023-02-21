import React from 'react'
import Head from 'next/head';
import AboutUsBanner from '../about/AboutUsBanner';
import ExpPlaceInfo from '../about/ExpPlaceInfo';
import TESeducation from '../about/TESection';
import VisionSection from '../about/VisionSection';
import PrinceSection from '../about/PrinceSection';
import PartnersSection from '../about/PartnersSection';
import RightStep from '../about/RightStep';

const aboutUS = () => {
  return (
    <>
       <Head>
        <title>About us</title>
      </Head>
<AboutUsBanner />
<ExpPlaceInfo />
<TESeducation/>
<VisionSection/>
<RightStep />
<PrinceSection/>
<PartnersSection/>
</>
  )
}

export default aboutUS;