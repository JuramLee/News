import { useSetAtom } from 'jotai';
import React, { useState, useEffect } from 'react';
import { categoryAtom } from '../Model/atoms';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const normalStyle =
    'py-3 hover:border-l-2 hover:border-indigo-800 hover:text-indigo-800 hover:font-bold pl-3 border-l-2 py-1';
  const selectedStyle =
    'py-3 border-l-2 border-indigo-800 text-indigo-800 font-bold pl-3 border-l-2 py-1';
  const Logo = '/Assets/logo.png';

  const [selected, setSelected] = useState('news');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const setCategoryAtom = useSetAtom(categoryAtom);

  const onClickCategory = (category: string): void => {
    setSelected(category);
    setCategoryAtom(category);
    navigate({
      pathname: '/',
      search: `?category=${category}`,
    });
  };

  useEffect(() => {
    let currentCategory = searchParams.get('category');
    const detailId = searchParams.get('id');
    if (!currentCategory && !detailId) currentCategory = 'news';
    setCategoryAtom(String(currentCategory));
    setSelected(String(currentCategory));
  }, [searchParams]);

  return (
    <div className='flex flex-col w-1/4 h-screen p-10 cursor-pointer'>
      <div className='w-72 my-10'>
        <img src={Logo} alt='logo' />
      </div>
      <div>
        <div
          className={selected === 'news' ? selectedStyle : normalStyle}
          onClick={() => onClickCategory('news')}
          key='News'>
          News
        </div>
        {/* api에 문제가 생김
        <div 
          className={selected === 'newest' ? selectedStyle : normalStyle}
          onClick={() => onClickCategory('newest')}
          key='Newest'>
          Newest
        </div> */}
        <div
          className={selected === 'ask' ? selectedStyle : normalStyle}
          onClick={() => onClickCategory('ask')}
          key='Ask'>
          Ask
        </div>
        <div
          className={selected === 'show' ? selectedStyle : normalStyle}
          onClick={() => onClickCategory('show')}
          key='Show'>
          Show
        </div>
        <div
          className={selected === 'jobs' ? selectedStyle : normalStyle}
          onClick={() => onClickCategory('jobs')}
          key='Jobs'>
          Jobs
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
