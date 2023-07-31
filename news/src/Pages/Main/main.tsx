import React, { useEffect } from 'react';
import ListItem from './Components/listItem';
import { Axios } from '../../Api/@core';
import { useAtomValue, useSetAtom } from 'jotai';
import { categoryAtom, newsAtom } from '../../Model/atoms';

const MainFeed: React.FC = () => {
  const setNewsAtom = useSetAtom(newsAtom);
  const newsData = useAtomValue(newsAtom);
  const currentCategory = useAtomValue(categoryAtom);

  const getNewsData = async () => {
    try {
      const res = await Axios.get(`${currentCategory}/1.json`);
      setNewsAtom(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNewsData();
  }, [currentCategory]);

  return (
    <div className='flex flex-col w-full p-32 pl-10'>
      {newsData.map((news) => {
        return <ListItem news={news} key={news.id} />;
      })}
    </div>
  );
};

export default MainFeed;
