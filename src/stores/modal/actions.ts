import { atom } from 'jotai';

import { modalStateAtom } from '@/stores/modal';
import type { ModalStateType } from '@/types/atom/modal';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (_, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);
