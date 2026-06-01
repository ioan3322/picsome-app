import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { ImageItem } from "../shared/utils/types"

type StoreState = {
  cart: ImageItem[]
  favourites: ImageItem[]

  toast: {
    message: string
    visible: boolean
  }

  addToCart: (item: ImageItem) => void
  removeFromCart: (id: ImageItem["id"]) => void
  isInCart: (id: ImageItem["id"]) => boolean
  toggleCart: (item: ImageItem) => void

  toggleFavourite: (item: ImageItem) => void
  isFavourite: (id: ImageItem["id"]) => boolean
  clearFavourites: () => void

  showToast: (message: string) => void
  hideToast: () => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      favourites: [],

      toast: {
        message: "",
        visible: false,
      },

      showToast: (message) =>
        set({
          toast: {
            message,
            visible: true,
          },
        }),

      hideToast: () =>
        set({
          toast: {
            message: "",
            visible: false,
          },
        }),

      addToCart: (item) => {
        set((state) => {
          const exists = state.cart.some((i) => i.id === item.id)
          if (exists) return state

          return { cart: [...state.cart, item] }
        })
      },

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== id),
        })),

      isInCart: (id) => get().cart.some((i) => i.id === id),

      toggleCart: (item) =>
        set((state) => {
          const exists = state.cart.some((i) => i.id === item.id)
          return {
            cart: exists
              ? state.cart.filter((i) => i.id !== item.id)
              : [...state.cart, item],
          }
        }),

      toggleFavourite: (item) =>
        set((state) => {
          const exists = state.favourites.some((i) => i.id === item.id)

          return {
            favourites: exists
              ? state.favourites.filter((i) => i.id !== item.id)
              : [...state.favourites, item],
          }
        }),

      isFavourite: (id) =>
        get().favourites.some((i) => i.id === id),

      clearFavourites: () => set({ favourites: [] }),
    }),
    {
      name: "picsome-store",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const persisted = localStorage.getItem(name)
          if (persisted) return persisted

          const legacyCart = localStorage.getItem("cart")
          const legacyFavourites = localStorage.getItem("favorites")

          if (!legacyCart && !legacyFavourites) return null

          const parseLegacyArray = (value: string | null) => {
            if (!value) return []

            try {
              const parsed = JSON.parse(value)
              return Array.isArray(parsed) ? parsed : []
            } catch {
              return []
            }
          }

          return JSON.stringify({
            state: {
              cart: parseLegacyArray(legacyCart),
              favourites: parseLegacyArray(legacyFavourites),
            },
            version: 0,
          })
        },
        setItem: (name, value) => localStorage.setItem(name, value),
        removeItem: (name) => localStorage.removeItem(name),
      })),
      partialize: (state) => ({
        cart: state.cart,
        favourites: state.favourites,
      }),
    }
  )
)