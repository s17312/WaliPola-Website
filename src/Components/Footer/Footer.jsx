import React from 'react'
// import './footer.scss'
import './footer.css'
import video2 from '../../Geethanjalee/Video2.mp4'
import {FiNavigation} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'


const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiNavigation className="icon" />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>
                WaliPola.
              </a>
            </div>

            <div className='footerParagraph'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </div>

            <div className='footerSocials flex'>
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiOutlineLinkedin className="icon" />
            </div>
          </div>

          <div className='footerLinks grid'>

            {/* {Group One} */}
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Insurence
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Payment
              </li>

            </div>

            {/* {Group Two} */}
            <div className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Booking
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Payment
              </li>

            </div>

            {/* {Group Three} */}
            <div className='linkGroup'>
              <span className='groupTitle'>
                
              </span>
              
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Insurence
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className="icon" /> Payment
              </li>

            </div>



          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEAME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer