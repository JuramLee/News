import React, { useEffect, useState } from 'react';
import DetailInfo from './Components/info';
import Comments from './Components/comments';
import { useSearchParams } from 'react-router-dom';
import { Axios } from '../../Api/@core';
import { INewsDetailData } from '../../Model/types';
import { useSetAtom } from 'jotai';
import { newsDetailAtom } from '../../Model/atoms';

const Detail: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [detailItem, setDetailItem] = useState<INewsDetailData>();

  const id = searchParams.get('id');
  const setNewsDetailAtom = useSetAtom(newsDetailAtom);

  const getNewsDetail = async () => {
    try {
      const res = await Axios.get(`item/${id}.json`);
      setDetailItem(res.data);
      setNewsDetailAtom(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log('detailItem', detailItem);

  useEffect(() => {
    getNewsDetail();
  }, []);

  return (
    <div className='flex w-full p-32 pl-10'>
      <div className='w-10/12'>
        <DetailInfo detailItem={detailItem as INewsDetailData} />
        <div className='p-6 bg-indigo-100 my-4 '>
          {detailItem?.content ? detailItem.content : 'No Content'}
        </div>
        {detailItem?.comments.map((comment) => (
          <Comments comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
