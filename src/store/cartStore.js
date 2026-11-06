import { create } from 'zustand'

export const useCartStore = create((set) => ({
  itemCount: 0,
  items: [],
}))