import { atom } from 'jotai';
import { IDewsDetailData, INewsData } from './types';

export const newsAtom = atom<INewsData>([]);
export const categoryAtom = atom<string>('news');
export const newsDetailAtom = atom<IDewsDetailData>({} as IDewsDetailData);
