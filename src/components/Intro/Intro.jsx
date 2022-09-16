import React from 'react';
import './Intro.css';

const Intro = () => {

  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Brian McPhillips</h1>
        </div>
      </div>
      <div className='i-right'>right</div>
    </div>
  );
};

export default Intro;
