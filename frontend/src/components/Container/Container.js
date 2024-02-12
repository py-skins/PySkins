import React from 'react'
import "./Container.scss"; // Import your SCSS file

const Container = ({children}) => {
  return (
    <div className='layout__container'>
      {children}
    </div>
  )
}

export default Container