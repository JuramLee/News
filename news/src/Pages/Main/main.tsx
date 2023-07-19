import React from 'react';
import ListItem from './Components/listItem';
import { Axios } from '../../Api/@core';

const MainFeed: React.FC = () => {
  // const [newsData, setNewsData] = useState('');
  const dataTest = Axios.get('news/1.json').then((data) => console.log(data));

  console.log('@@', dataTest);
  return (
    <div className='flex flex-col w-full p-32 pl-10'>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default MainFeed;
