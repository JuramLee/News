import React from 'react';
import 'tailwindcss/tailwind.css';
import Main from './Pages/Main/Main';
import DetailInfo from './Pages/Detail/Components/info';
import Comments from './Pages/Detail/Components/comments';
import Detail from './Pages/Detail/detail';

const App:React.FC = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-10/12 max-w-screen-xl border border-gray-200'>
        <Main/>
    <>
      {/* <div className='w-full bg-slate-50 flex flex-col justify-center items-center'>
        <div className='w-10/12 max-w-screen-xl border border-gray-700 p-20'></div>
        <DetailInfo />
      </div>
      <Comments /> */}
      <Detail />
    </>
  );
}

export default App;
