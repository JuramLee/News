import { atom } from 'jotai';
import { INewsDetailData, INewsData } from './types';

export const newsAtom = atom<INewsData>([]);
export const categoryAtom = atom<string>('news');
export const newsDetailAtom = atom<INewsDetailData>({} as INewsDetailData);
