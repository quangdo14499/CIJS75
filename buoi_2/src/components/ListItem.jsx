import React from 'react';
import { Item } from './Item';

export const ListItem = () => {
  const array = ['Clean up bedroom','Buy some milk','Jogging','Learn React','Do Exercises']
  return (
    <div className='list'>
        {array.map((el) => {
          return Item(el);
        })}
    </div>
  );
};
