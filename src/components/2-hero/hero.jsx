import './hero.css';
import React from 'react';
import Lottie from 'lottie-react';
import devanimation from '../../../src/components/animation/dev.json';

const Hero = () => {
    return (
        <section className='hero flex'>
            <div className='left-section '>
                <div className='parent-avatar flex'>
                    <img className='avatar' src="/img/me.png" alt="photo for Kareem Okeil" />
                    <div className='icon-verified' />   
                </div>
                <h1 className='title'>Front-End Developer specializing in designing and developing modern, seamless web interfaces.</h1>
                <p>I'm KAREEM OKEIL, a Front-End Developer specializing in building dynamic and engaging user interfaces using React. I am passionate about creating seamless web experiences that prioritize usability and aesthetics. With a strong foundation in both English and Arabic, I effectively communicate and collaborate with diverse teams and clients. My goal is to continually enhance my skills and contribute to innovative projects that make a difference.</p>
                <div className='icons flex'>
                    <div className='icon icon-social-twitter' />
                    <div className='icon icon-instagram' />
                    <div className='icon icon-github' />
                    <div className='icon icon-linkedin' />
                </div>
            </div>
            <div className='right-section animation ' >
                <Lottie className='dev-animation' animationData={devanimation} 
                onLoadedImages={() => {
                    
                }}/>
            </div>
        </section>
    );
}

export default Hero;
