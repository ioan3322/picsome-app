import {create } from 'zustand';
import { ImageItem,DataImageItem } from '../shared/utils/types';

type StoreState = {
 count: number;
};

export const useStore = create<StoreState>(() => ({
    count: 0,
    
}))