import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Comments = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='p-4 w-full max-w-screen-xl '>
      <div className='flex justify-between'>
        <span>1 depth 댓글</span>
        <button
          className='py-1 px-2 flex items-center'
          onClick={() => setShowMore(!showMore)}>
          <img
            className={`w-8 ${!showMore && 'rotate-180'}`}
            src='/Assets/arrow.png'
            alt='내보내기 아이콘'
          />
        </button>
      </div>
      {showMore && <div className={`${'pl-8'}`}>2 depth 댓글</div>}
    </div>
  );
};

export default Comments;
