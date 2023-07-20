import React, { useEffect } from 'react';
import ListItem from './Components/listItem';
import { Axios } from '../../Api/@core';
import { atom, useAtom } from 'jotai';

export const newsAtom = atom<any>('');

const MainFeed: React.FC = () => {
  const [newsData, setNewsData] = useAtom(newsAtom);
  useEffect(() => {
    const res = Axios.get('news/1.json').then((data) => setNewsData(data.data));
    console.log(newsData);
  }, []);

  return (
    <div className='flex flex-col w-full p-32 pl-10'>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default MainFeed;
