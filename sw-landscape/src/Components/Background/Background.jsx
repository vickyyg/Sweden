import React from 'react'
import './Background.css'
import sweden1 from '../../Assets/sweden1.avif'
import sweden2 from '../../Assets/sweden2.avif'
import sweden3 from '../../Assets/sweden3.avif'



const Background = ({playStatus, banerCount}) => {
  if (playStatus) {
    return(
      <img src={sweden1}  className='background fade-in' alt=''/>
    )
  }
  else if(banerCount===0){
    return <img src={sweden1}  className='background fade-in' alt=''/>
  }
  else if (banerCount===1){
    return <img src={sweden2}  className='background fade-in' alt=''/>
  }
  else if (banerCount===2){
    return <img src={sweden3}  className='background -in' alfadet=''/>
  }
 
 
 
}

export default Background