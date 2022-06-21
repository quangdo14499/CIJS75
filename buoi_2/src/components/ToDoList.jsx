import React from 'react';
import { ListItem } from './ListItem';
import { Input } from './Input';
import { Footer } from './Footer';

export const ToDoList = () => {
  return (
    <div className='wrapper'>
        <Input/>
        <ListItem/>
        <Footer/>
    </div>
  )
}
