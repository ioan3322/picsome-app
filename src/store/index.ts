import { create } from 'zustand';
import { ImageItem } from '../shared/utils/types';

type StoreState = {
  cart: ImageItem[];
  favourites: ImageItem[];
  addToCart: (item: ImageItem) => void;
  removeFromCart: (id: ImageItem['id']) => void;
  isInCart: (id: ImageItem['id']) => boolean;
  toggleCart: (item: ImageItem) => void;
  toggleFavourite: (item: ImageItem) => void;
  isFavourite: (id: ImageItem['id']) => boolean;
  clearFavourites: () => void;
};

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  favourites: [],

  addToCart: (item: ImageItem) => {
    set((state) => {
        const exists = state.cart.some((i) => i.id === item.id);

    if (exists) return state;

    return {
      cart: [...state.cart, item],
};
    });
  },
  

  removeFromCart: (id: ImageItem['id']) => {
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) } ));
  },
  // check if item is in cart
  isInCart: (id: ImageItem['id']) => {
    return get().cart.some((i) => i.id === id);
  },

  toggleCart: (item: ImageItem) => {
    set((state) => {
      const exists = state.cart.some((i) => i.id === item.id);
      if (exists) {
        return { cart: state.cart.filter((i) => i.id !== item.id) };
      }
      return { cart: [...state.cart, item] };
    });
  },

  toggleFavourite: (item: ImageItem) => {
    set((state) => {
      const exists = state.favourites.some((i) => i.id === item.id);
      if (exists) {
        return { favourites: state.favourites.filter((i) => i.id !== item.id) };
      }
      
      return { favourites: [...state.favourites, item] };
    });
  },

  isFavourite: (id: ImageItem['id']) => {
    return get().favourites.some((i) => i.id === id);
  },

  clearFavourites: () => set({ favourites: [] } ),
}));
