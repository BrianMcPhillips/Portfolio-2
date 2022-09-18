import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {

  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title"> Create, Inspire Something</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Quisquam, fugiat. Quia voluptatibus eos odit facilis numquam 
          reprehenderit sed suscipit repudiandae vel commodi aliquam possimus consequatur, 
          consectetur aperiam! Quisquam, exercitationem animi?
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductList;