import React from 'react';
import './Product.css';

const Product = () => {

  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle-i'></div>
        <div className='p-circle-ii'></div>
        <div className='p-circle-iii'></div>
      </div>
      <a href='https://www.placecage.com' target='_blank' rel='noreferrer'>
        <img className='p-img' src='https://www.placecage.com/200/400' alt='cage' />
      </a>
    </div>
  );
}

export default Product;
