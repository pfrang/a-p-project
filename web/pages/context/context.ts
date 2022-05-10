import create from 'zustand';

export const useBikeData = create((set) => ({
  bikeData: [],
  setBikeData: (e) => set(()=> ({bikeData: e}))
}))
