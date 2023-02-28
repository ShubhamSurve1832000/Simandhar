import Image from 'next/image'
import DownloadFormComponents from '../components/download_form'
import { useState} from 'react';

export default function awardSection() {
	const [isShow, setIsShow] = useState(false);
  const showDwnPopup = () => {
    setIsShow(!isShow);
    };
	return (
		<>
			<section className="award-section">
				<div className='award-container'>
					<h4 className='heading04'>An award-winning institute that believes in transforming lives</h4>
					<p>Simandhar Education is aiming to upskill you and create a new-age approach for success</p>
				</div>
				<div className='award-right-box'>
					<h3 className='heading04'>Prepare with India's Trusted Institute</h3>
					<p>Over 90% pass percentage in US CPA, CMA</p>
					<a className='btn white-btn white-btn-arrow' onClick={showDwnPopup}>Download Free Prospectus</a>
				</div>
			</section>
			<div className='download-overlay' onClick={showDwnPopup} style={{display: isShow ? 'block' : 'none'}}></div>
			<div className='download-popup' style={{display: !isShow ? 'none' : 'block'}}><DownloadFormComponents/></div>
		</>
	)
}
