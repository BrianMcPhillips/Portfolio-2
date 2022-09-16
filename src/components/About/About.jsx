import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className='a-img' src="https://www.placecage.com/600/600" alt="cage" />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          It is a long established fact that a reader will be distracted by readable content
        </p>
        <p className="a-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nulla et doloribus 
          illo sit porro consectetur distinctio, quae deserunt. Aperiam quas temporibus ab corrupti libero dignissimos, earum numquam autem officia?
        </p>
      </div>
    </div>
  );
}

export default About;
