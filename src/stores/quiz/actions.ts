import { atom } from 'jotai';

import type { ModalStateType } from '@/stores/modal';
import { modalStateAtom } from '@/stores/modal';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (_, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);
