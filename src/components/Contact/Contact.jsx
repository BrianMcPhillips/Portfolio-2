import React from 'react';
import './Contact.css';
import gmail from '../../images/gmail.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

const Contact = () => {

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss things</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img 
                src={gmail} 
                alt="Brian McPhillips Email" 
                className='c-icon'
              />
              BMcPhillipsDev@gmail.com
            </div>
            <div className="c-info-item">
              <img 
                src={linkedin} 
                alt="Brian McPhillips Linked-in page" 
                className='c-icon'
              />
              https://Linkedin.com/in/BrianMcPhillips
            </div>
            <div className="c-info-item">
              <img 
                src={github} 
                alt="Brian McPhillips github page" 
                className='c-icon'
              />
              https://github.com/BrianMcPhillips
            </div>
          </div>
        </div>
        <div className="c-right"></div>
      </div>
    </div>
  );
}

export default Contact;
