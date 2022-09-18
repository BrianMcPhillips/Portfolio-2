import React from 'react';
import './Product.css';

const Product = () => {

  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="https://www.placecage.com" target='_blank' rel='noreferrer'>
        <img src="https://www.placecage.com/300/300" alt="cage" />
      </a>
    </div>
  );
}

export default Product;
