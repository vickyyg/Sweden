import React from 'react'
import './Baner.css'
import arrow from '../../Assets/arrow.png'

const Baner = ({banerData, setBanerCount, banerCount }) => {

  return (
    <div className='baner'>
        <div className='baner-text'>
        <p>{banerData.text1}</p>
        <p>{banerData.text2}</p>
            
        </div>
        <div className='baner-explore'>
            <p>Explore the nature</p>
            <img  className='btn'  src={arrow} alt=''/>
        </div>
        <div className="baner-dot-play">
          <ul className='baner-dots'>
            <li onClick={()=>setBanerCount(0)} className={banerCount===0?"baner-dot orange" : "baner-dot"}></li>
            <li onClick={()=>setBanerCount(1)} className={banerCount===1?"baner-dot orange" : "baner-dot"}></li>
            <li onClick={()=>setBanerCount(2)} className={banerCount===2?"baner-dot orange" : "baner-dot"}></li>
            
          </ul>
        </div>
    </div>
  )
}

export default Baner