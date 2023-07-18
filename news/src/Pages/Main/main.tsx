import React from 'react';
import Sidebar from '../../Components/sidebar';
import ListItem from './Components/listItem';

const Main:React.FC = () => {
  return (
    <div className='flex flex-start h-full'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    </div>
  )
}

export default Main;

