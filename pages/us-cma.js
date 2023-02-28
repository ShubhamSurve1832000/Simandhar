import React from 'react'
import Head from 'next/head'
import BannerSection from '../CPA/BannerSection'
import HelpSection from '../CPA/HelpSection'

import helpData from '../database/data/helpSection.json'
import bannerData from '../database/data/banner.json'



export default function CMA() {
  return (
    <>
      <Head>
        <title>US CMA - Simandhar Education</title>
      </Head>
<BannerSection bannerData={bannerData.cmaPage}/>
      <HelpSection helpData={helpData.cmaPage} />

    </>
  )
}
