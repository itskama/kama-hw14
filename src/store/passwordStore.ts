import { create } from 'zustand';

interface PasswordStore {
  password: string;
  passwordCorrect: string;
  isAccessGranted: boolean | null;
  handleAdd: (value: string) => void;
  handleRemove: () => void;
  handleCheck: () => void;
}

export const usePasswordStore = create<PasswordStore>((set) => ({
  password: '',
  passwordCorrect: '7777',
  isAccessGranted: null, 
  handleAdd: (value) =>
    set((state) => ({
      password: state.password.length < 4 ? state.password + value : state.password,
    })),
  handleRemove: () =>
    set((state) => ({
      password: state.password.slice(0, -1),
    })),
  handleCheck: () =>
    set((state) => {
      const isCorrect = state.password === state.passwordCorrect;
      return {
        isAccessGranted: isCorrect,
        password: isCorrect ? '' : state.password,
      };
    }),
}));