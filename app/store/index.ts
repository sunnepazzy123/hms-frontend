import { create } from 'zustand'
import { IMedicalRecords } from '../interfaces/medical-records.interface'
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useHmsStore = create((set) => ({
  sideNav: false,
  id: null,
  medicalRecord: {} as IMedicalRecords,
  openSideNav: () => set((state: any) => ({sideNav: !state.sideNav})),
  setId: (id: string|null) => set((state: any) => ({id: id})),
  setRecordState: (newState: any) => {
    // Save state to sessionStorage whenever it changes
    set((state: any) => {
      sessionStorage.setItem('recordState', JSON.stringify(newState));
      return newState;
    });
  },
}))


if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store1', useHmsStore);
}


