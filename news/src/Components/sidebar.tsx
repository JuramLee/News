import React from 'react'

const Sidebar: React.FC = () => {
  const Logo = '/logo.png'
  return (
    <div className='flex flex-col w-2/6 p-3'>
      <div className='pl-3' >
        <img src={Logo} alt='logo' />
      </div>
      <div className='mt-3'>
        <div className='hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>News</div>
        <div className='hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>Newest</div>
        <div className='hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>Ask</div>
        <div className='hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>Show</div>
        <div className='hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1'>Jobs</div>
      </div>
    </div>
  )
}

export default Sidebar;
