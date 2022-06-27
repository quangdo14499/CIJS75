import React from 'react'
import { useState } from 'react';

export const Item = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChecked = () => {
    setIsChecked(current => !current)
  }
  return (
    <div className='item' >
        <input type={'checkbox'} onClick={handleChecked}/>
        {/* <input type="checkbox" />
        <label htmlFor="">{props}</label> */}
        <label>{isChecked ? props : <del>{props}</del>}</label>
    </div>
  );
};
