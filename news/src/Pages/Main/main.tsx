import React, { useEffect } from 'react';
import ListItem from './Components/listItem';
import { Axios } from '../../Api/@core';
import { atom, useSetAtom } from 'jotai';

export const newsAtom = atom('');

const MainFeed: React.FC = () => {
  const setNewsAtom: any = useSetAtom(newsAtom);

  const getNewsData = async () => {
    try {
      const res = await Axios.get('news/1.json');
      setNewsAtom(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNewsData();
    console.log(newsAtom);
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
