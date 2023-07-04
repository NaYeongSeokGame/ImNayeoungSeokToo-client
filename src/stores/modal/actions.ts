import { atom } from 'jotai';

import type { ModalStateType } from '@/stores/atoms';
import { modalStateAtom } from '@/stores/atoms';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (_, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);
