import { create } from 'zustand';
import { ImageItem, DataImageItem } from '../shared/utils/types';

type StoreState = {
  count: number;
  addToCart: (item: ImageItem) => void;
  removeFromCart: (item: ImageItem) => void;
  addToFavorites: (item: ImageItem) => void;
  removeFromFavorites: (item: ImageItem) => void;
};

export const useStore = create<StoreState>((set) => ({
  count: 0, 
  addToCart: (item: ImageItem) => {
    set((state: StoreState) => ({ count: state.count + 1 }));
  },
  removeFromCart: (item: ImageItem) => {
    set((state: StoreState) => ({ count: state.count - 1 }));
  },
  addToFavorites: (item: ImageItem) => {
    set((state: StoreState) => ({ count: state.count + 1 }));
  },
  removeFromFavorites: (item: ImageItem) => {
    set((state: StoreState) => ({ count: state.count - 1 }));
  },

  
}));
