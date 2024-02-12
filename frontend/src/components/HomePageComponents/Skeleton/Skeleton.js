import React from 'react'
import './skeleton.scss'

export default function Skeleton({type}) {
  // const COUNTER = 4;  
  
  const CarouselSkeleton = () => (

        <div className='card__sk'>
          <div className="imgBox__sk"></div>
          <div className="content__sk"></div>
        </div>

    )
    // if (type === 'carousel') return Array(COUNTER).fill(<CarouselSkeleton/>)
    if (type === 'carousel') return <CarouselSkeleton/>
    
  }
