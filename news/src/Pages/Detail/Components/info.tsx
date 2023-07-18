import React from 'react';
import 'tailwindcss/tailwind.css';

const DetailInfo = () => {
  return (
    <div className='p-4 w-full max-w-screen-xl border-b-2 border-b-slate-950'>
      <div className='text-xl mb-1'>
        title title title title title title title title title
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center justify-center'>
          <span className='pr-4 border border-r-slate-950 border-t-0 border-b-0 border-l-0'>
            id id id
          </span>
          <span className='px-4 px-4 border border-r-slate-950 border-t-0 border-b-0 border-l-0'>
            username
          </span>
          <span className='px-4'>date</span>
        </div>
        <button className='border rounded-l-lg rounded-r-lg py-1 px-2 flex items-center'>
          <img className='w-8' src='Assets/export.png' alt='내보내기 아이콘' />
        </button>
      </div>
    </div>
  );
};

export default DetailInfo;
