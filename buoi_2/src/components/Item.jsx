import React from 'react'

export const Item = (props) => {
  return (
    <div className='item'>
        <input type="radio" />
        <label htmlFor="">{props}</label>
    </div>
  );
};
