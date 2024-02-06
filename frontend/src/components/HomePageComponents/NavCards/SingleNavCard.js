import React from 'react'
import "./navCards.scss"; // Import your SCSS file
import { Link } from 'react-router-dom';

const SingleNavCard = ({title, desc, icon:Icon, href, delayOne, delayTwo}) => {
  return (

        <div className='nav__card'>
          {/* ICON */}
          <div className="nav__card-icon">
            {Icon && <Icon size={34}/>}
          </div>

          {/* TITLE */}
          <div className='nav__card-title'>
            <h2>
              {title}
            </h2>
          </div>
          {/* DESC */}
          <div className="nav__card-desc">
              <p>
                {desc}
              </p>
          </div>
          {/* NAVIGATION */}
          <div className='nav__card-navigate'>
            <Link 
              to={href} 
              className={`nav__card-link 
                ${delayOne ? 'nav__card-delayOne' : null} 
                ${delayTwo ? 'nav__card-delayTwo' : null}
                `}>
                Trade Instantly 
                <span style={{
                  fontSize: '30px',
                  paddingBottom: '2px',fontWeight:'100'
                }}>
                 &raquo;
                </span>
            </Link>

            
          </div>
        </div>
  )
}

export default SingleNavCard