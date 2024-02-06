import React from 'react'
import './Backdrop.scss'

const BackDrop = ({onClick}) => {
  return (
    <div
      onClick={onClick}
      className='backdrop__main'
    >  
    </div>
  )
}

export default BackDrop