import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro" >
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Amit</span><br />Full Stack developer</span>
                <p className='introPara'>I am an adept developer with a proven track record in crafting applications<br/> that effortlessly scale</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>

    )
}

export default Intro