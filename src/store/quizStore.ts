import { create } from "zustand";

interface QuizStore {
  tratamento: string;
  setTratamento: (tratamento: string) => void;
  removeTratamento: () => void;
  areaDoCorpo: string;
  setAreaDoCorpo: (areaDoCorpo: string | undefined) => void;
  removeAreaDoCorpo: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  tratamento: '',
  areaDoCorpo: '',
  setAreaDoCorpo: (areaDoCorpo: string | undefined) => set({ areaDoCorpo }),
  removeAreaDoCorpo: () => set({ areaDoCorpo: '' }),
  setTratamento: (tratamento: string) => set({ tratamento }),
  removeTratamento: () => set({ tratamento: '' }),
}));