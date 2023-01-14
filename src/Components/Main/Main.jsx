import React from 'react'
// import './main.scss'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import img from '../../Geethanjalee/img (1).jpg'
import img2 from '../../Geethanjalee/img (2).jpg'
import img3 from '../../Geethanjalee/img (3).jpg'
import img4 from '../../Geethanjalee/img (4).jpg'
import img5 from '../../Geethanjalee/img (5).jpg'
import img6 from '../../Geethanjalee/img (6).jpg'
import img7 from '../../Geethanjalee/img (7).jpg'
import img8 from '../../Geethanjalee/img (8).jpg'
import img9 from '../../Geethanjalee/img (9).jpg'


const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activities'
  },
]

const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destintions
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div key={id} className="singleDestination">
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent'> 
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees'>
                    <div className='flex pricebox'>
                      <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div></div>

                    <div className='desc'>
                      <p>{description}</p>
                    </div>

                    <button className='btn'>
                      DETAILS <BsClipboardCheck className='icon'/>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>   
    </section>
  )
}

export default Main