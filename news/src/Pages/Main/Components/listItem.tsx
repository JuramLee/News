import React from 'react'

const ListItem:React.FC = () => {
  return (
      <div className='border border-slate-400 py-3 px-5 mb-2 rounded-lg w-full'>
          <div className='flex justify-end items-center text-xm text-slate-700'>
            <div className='border-r border-gray-400 pr-5'>userName</div>
            <div className='pl-5'>00 time</div>
          </div>
          <div className='text-base bg-white w-fit px-1'>id id id id</div>
      <div className='text-xl'>title title title title title title title</div>
      <div className='flex justify-end'>
        <div className='w-fit p-2 text-center rounded-md bg-slate-200 text-slate-400 text-xs'>
          00<br />comments
        </div>
      </div>
    </div>
  )
}

export default ListItem;
