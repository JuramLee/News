import React from 'react';
import 'tailwindcss/tailwind.css';
import Main from './Pages/Main/Main';

const App:React.FC = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-10/12 max-w-screen-xl border border-gray-200'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
