import React, {useEffect} from 'react'
// import './home.scss'
import './home.css'
import video from '../../Geethanjalee/01_Main_1_1.mp4'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

// import Aos from 'aos'
// import 'aos/dist/aos/css'


const Home = () => {

    //Hook to add a scroll animation...
    // useEffect(() => {
    //     Aos.init({duration: 2000})
    // }, [])


  return (
      <section className='home'>
            <div className='overlay'></div>
            <div><video src={video} muted autoPlay loop type="video/mp4"></video></div>

            <div className='homeContent container'>
                <div className='textDiv'>

                    <span data-aos="fade-up" className='smallText'>
                        Our Packages
                    </span>

                    <h1 className='homeTitle'> 
                        Search Your Holiday
                    </h1>

                </div>

                <div className='cardDiv grid'>
                    <div className='heroFlex'>
                    <div className='destinationInput'>
                        <label htmlFor='city'>Search Your Destination:</label>
                        <div className='input flex'>
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>

                    <div className='dateInput'>
                        <label htmlFor='date'>Select your date:</label>
                        <div className='input flex'>
                            <input type="date"/>
                            {/* <GrLocation className='icon'/> */}
                        </div>
                    </div>

                    <div className='priceInput'>
                        <div className='lable_total flex'>
                            <label htmlFor='price'>Max price:</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className='input flex'>
                            <input type="range" max="5000" min="1000"/>
                        </div>
                    </div>
                    </div>

                    
                </div>

                <div className='homeFooterIcon'>
                    <div className='rightIcons'>
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <AiOutlineLinkedin className="icon"/>
                    </div>
                </div>
            </div>

      </section>
  )
}

export default Home