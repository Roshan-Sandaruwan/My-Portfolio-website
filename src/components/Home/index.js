import React from 'react'
import LogoR from '../../assets/images/logo-R.png'

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi, <br/> I'm </h1>
        <img src={LogoR} alt='developer' />
      </div>
    </div>
  )
}

export default Home