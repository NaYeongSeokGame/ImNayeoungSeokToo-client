import { atom } from 'jotai';
import type { ModalStateType } from '@/types/atom/modal';

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: [],
});
