import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { INewsDetailData } from '../../../Model/types';

type Props = {
  comment: INewsDetailData;
};

const Comments: React.FC<Props> = ({ comment }) => {
  const [showMore, setShowMore] = useState(false);
  console.log('comment', comment);

  return (
    <div className='p-4 mb-4 w-full min-h-max max-w-screen-xl bg-stone-50 whitespace-normal'>
      <div className='flex justify-between '>
        <span className='w-11/12 whitespace-normal'>{comment.content}</span>
        <button
          className='py-1 px-2 flex items-center'
          onClick={() => setShowMore(!showMore)}>
          <img
            className={`w-8 ${!showMore && 'rotate-180'} min-w-[30px]`}
            src='/Assets/arrow.png'
            alt='더보기 아이콘'
          />
        </button>
      </div>
      {showMore && comment.comments && (
        <div className={'pl-8 w-11/12 whitespace-normal'}>
          {comment.comments.map((com) => (
            <div className='pt-4 '>{com.content}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
