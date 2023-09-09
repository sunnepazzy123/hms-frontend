import { create } from 'zustand'

export const useHmsStore = create((set) => ({
  sideNav: false,
  id: null,
  openSideNav: () => set((state: any) => ({sideNav: !state.sideNav})),
  setId: (id: string|null) => set((state: any) => ({id: id}))
}))



