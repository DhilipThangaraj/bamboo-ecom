import { create } from "zustand";

interface ThemeStoreState {
  theme: string;
  setTheme: (value: string) => void;
}

export const useThemeStore = create<ThemeStoreState>((set) => ({
  theme: "light", //default
  setTheme: (value) => set({ theme: value }),
}));
