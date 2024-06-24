import React from 'react'
import './skills.css'

import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id='skills' >
      <span className='skillTitle'>What I do </span>
      <span className='skillDesc'>I am skilled and passionate Application Designer with experince in MERN Stack</span>
      <div className='skillsBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is Demo text, you can write your content here</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>This is Demo text, you can write your content her</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App design</h2>
            <p>This is demo app</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills