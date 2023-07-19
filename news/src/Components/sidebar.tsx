import React from 'react';

const Sidebar: React.FC = () => {
  const Logo = '/Assets/logo.png';
  return (
    <div className='flex flex-col w-1/4 h-screen p-10'>
      <div className='w-72 my-10'>
        <img src={Logo} alt='logo' />
      </div>
      <div>
        <div className='py-3 hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>
          News
        </div>
        <div className='py-3 hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>
          Newest
        </div>
        <div className='py-3 hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>
          Ask
        </div>
        <div className='py-3 hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>
          Show
        </div>
        <div className='py-3 hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>
          Jobs
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
