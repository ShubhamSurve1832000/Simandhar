import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import Image from 'next/image'
// import app_store_1 from 'public/app_store_1.png'
// import app_store_2 from 'public/app_store_2.png'

export default function ContactUs() {
    return (
        <><section className='container'>
            <div className="contact_us">
                <h2 className="heading02">Contact Us</h2>
                <div className="form_box_black grid">
                    <form class=" sec3-cnt1" id="inquire_now_2" name="inquire_now_2">
                        <div class="sec3-btns"><input type="text" id="name" name="name" placeholder="Enter Your Name" /></div>
                        <div class="sec3-btns"><input type="text" id="email" name="email" placeholder="Enter Your Email Address" /></div>
                        <div class="sec3-btns"><input type="text" id="phone" name="phone" placeholder="Enter your Mobile Number" /></div>
                        <div className='sec3-btns custom-select'>
                            <select id="select-course" >
                                <option>Select Course</option>
                                <option value="Course 1">Course 1</option>
                                <option value="Course 2">Course 2</option>
                                <option value="Course 3">Course 3</option>
                                <option value="Course 4">Course 4</option>
                            </select>
                        </div>
                        <div className='register-btn'>
                            <a className='btn  white-border-btn white-border-btn-arrow'>Register</a>
                        </div>
                    </form>
                    <div className='contact_right_box'>
                        <div className='add_row'><span><i><HiOutlineLocationMarker /></i></span>
                            <div><p className=''>Plot Number: 39/A Dr.Subba Rao Colony, Picket, Secunderabad, Telangana 500026</p></div>
                        </div>
                        <div className='add_row'><span><i><BiPhoneCall /></i></span>
                            <div>
                                <p className=''>Sales:<a href="tel:+91-7780273388">+91-7780273388</a></p>
                                <p className=''>Support: <a href="tel:+91-8977633523">+91-8977633523</a></p>
                                <p className=''>Evaluations: <a href="tel:+91-8045588550">+91-8045588550</a></p></div>
                        </div>
                        <div className='add_row'><span><i><HiOutlineMail /></i></span>
                            <div><p className='' ><a href="mailto:info@simandhareducation.com">info@simandhareducation.com</a> </p></div>
                        </div>
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1366681738036!2d78.4991588143541!3d17.453171605499534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a4010000075%3A0x95d6d292114c88f3!2sSimandhar%20Education%20-%20India&#39;s%20award%20winning%20Institute%20for%20US%20CPA%20%26%20IMA%20approved%20partner%20for%20US%20CMA.!5e0!3m2!1sen!2sin!4v1676294186295!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
            </section>
            <div className='red_box'>
                <div className='container grid'>
                    <h3 className='title'>Simandhar Learn App is Available
                        on all Platform</h3>
                    <div>
                        <img src="img/app_store_1.png" alt="apple store" />
                        <img src="img/app_store_2.png" alt="apple store" />
                    </div>
                </div>
            </div>
        </>
    )
}
