import React from 'react';
import { INewsData } from '../../../Model/types';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { categoryAtom } from '../../../Model/atoms';

type Props = {
  news: INewsData[number];
};

const ListItem: React.FC<Props> = ({ news }) => {
  const navigate = useNavigate();
  const currentCategory = useAtomValue(categoryAtom);

  const onClickList = () => {
    navigate(`/detail?category=${currentCategory}&id=${news.id}`);
  };

  return (
    <div
      className='border border-slate-400 py-3 px-5 mb-2 rounded-lg w-full cursor-pointer hover:outline-indigo-800 hover:outline hover:outline-2'
      onClick={() => onClickList()}>
      <div className='flex justify-end items-center text-xm text-slate-700'>
        <div className='border-r border-gray-400 pr-5'>{news.user}</div>
        <div className='pl-5'>{news.time_ago}</div>
      </div>
      <div className='text-base bg-white w-fit px-1'>{news.id}</div>
      <div className='text-xl'>{news.title}</div>
      <div className='flex justify-end'>
        <div className='w-fit p-2 text-center rounded-md bg-slate-200 text-slate-400 text-xs'>
          {news.comments_count}
          <br />
          comments
        </div>
      </div>
    </div>
  );
};

export default ListItem;
