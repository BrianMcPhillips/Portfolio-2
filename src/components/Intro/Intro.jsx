import React from 'react';
import './Intro.css';

const Intro = () => {

  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Brian McPhillips</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Audio Engineer</div>
              <div className="i-title-item">Disc Golfer</div>
              <div className="i-title-item">Watch Enthusiast</div>
              <div className="i-title-item">Something</div>
            </div>
          </div>
        </div>
      </div>
      <div className='i-right'>right</div>
    </div>
  );
};

export default Intro;
