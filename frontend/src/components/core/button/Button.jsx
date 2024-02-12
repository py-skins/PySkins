import React from 'react'
import styles from "./Button.scss"; // Import your SCSS 

const Button = ({
  title, 
  type, 
  icon:Icon, 
  onClick, 
  variant,
  size,
  reverse,
  hover,
  opacity,
  }) => {

  return (
    <div className='btn-wrapper'> 

    <button 
      onClick={onClick} 
      className={`
        btn
        ${variant === 'red' ? 'red' : null}
        ${variant === 'outline' ? 'outline' : null}
        ${variant === 'white' ? 'white' : null}
        ${size === 'sm' ? 'sm' : null}
        ${size === 'md' ? 'md' : null}
        ${reverse ? 'reverse' : null}
        ${hover ? 'hover' : null}
        ${opacity ? 'opacity' : null}
        
        `}    
      >
      {title}
      <div className='icon'>
        {Icon && <Icon size={18} />}
      </div>
    </button>
    </div>
  )
}

export default Button
