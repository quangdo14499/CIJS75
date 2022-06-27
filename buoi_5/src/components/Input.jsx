import React from 'react'
import { useState } from 'react';
import { Item } from './Item';

export const Input = () => {
  const [task, addTask] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setList((ls)=>[...ls,task]); 
};

const handleAddTask = (e) => addTask(e.target.value);
  return (
  <>
   <form className='input-form' onSubmit={handleSubmit}>
      <div className='input'>
        <input type="text" placeholder='Enter your task here...' value={task} onChange={handleAddTask}/>
      </div>
      <button className='hidden-btn' type='submit'></button>
    </form>  
    
    <div className='list'>
      {
        list.map((el)=> {
          return Item(el);
        })}
    </div>
  </>
   
  )
}
