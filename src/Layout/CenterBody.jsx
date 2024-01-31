import React from 'react'
import './CenterBody.scss'
import LeftCenter from '../components/LeftCenter'
import RightCenter from '../components/RightCenter'



const CenterBody = () => {
  return (
    <div className='center-body'>
        <LeftCenter />
        <RightCenter />


    </div>
  )
}

export default CenterBody