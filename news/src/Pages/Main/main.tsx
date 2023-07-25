import React, { useEffect } from 'react';
import ListItem from './Components/listItem';
import { Axios } from '../../Api/@core';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { AxiosResponse } from 'axios';
import { NewsData } from '../../Model/types';

export const newsAtom = atom<NewsData>([]);

const MainFeed: React.FC = () => {
  const setNewsAtom = useSetAtom(newsAtom);

  const getNewsData = async () => {
    try {
      const res = await Axios.get('news/1.json');
      setNewsAtom(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const newsData = useAtomValue(newsAtom);
  // any를 안주면 string, 근데 내 생각에는 res data[0] 객체 타입으로 들어와야할 것 같음
  // 그러면 객체 타입은 어디서 받냐?

  useEffect(() => {
    getNewsData();
  }, []);
  // }, [getNewsData]);
  // 의존성배열에 꼭 무언가가 들어가야하나? 지금 빠른수정에는 getNewsData가 들어가라는데
  // 그렇게 하면 getNewsData 전체에 밑줄이 간다

  return (
    <div className='flex flex-col w-full p-32 pl-10'>
      {newsData.map((news) => {
        return <ListItem news={news} />;
      })}
    </div>
  );
};

export default MainFeed;

// 여기서 리턴타입은 어떻게 줘야하나? 지금은 추론만 하는중
/* 왜 newsAtom을 콘솔찍으면 아래처럼 나오는가? config라서?
    init:""
    read:ƒ ()
    toString: () => key
    write:(get, set, arg) => {…}
    [[Prototype]]:Object
 */
// 왜 useAtomValue하면 string으로 타이핑이 되는가?
