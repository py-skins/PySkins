import React from 'react'
import './products.scss'
import { FiArrowUpRight } from 'react-icons/fi'

const SkinsCarousel = ({product}) => {
  
  return (
    <div className="card">
                <div className="imgBox">
                  <img src={product.main_image_url} alt="" />
                </div>
                <div className="content">
                  <div className="card-title">
                    <p>{product.name}</p>
                    {/* <p>From ${product.id}</p> */}
                  </div>

                  <div className="card-trade">
                    <span>Trade Now</span>
                    <FiArrowUpRight size={20} />
                  </div>
                </div>
              </div>
  )
}

export default SkinsCarousel