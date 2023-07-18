import React from 'react';
import ListItem from './Components/ListItem';
import Sidebar from '../../Components/Sidebar';

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

