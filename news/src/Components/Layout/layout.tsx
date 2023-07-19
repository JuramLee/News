import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

const LayoutSideBar: React.FC = () => {
  return (
    <div className='relative flex w-full'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutSideBar;
