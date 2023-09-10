import { useAtom } from 'jotai';
import type { ReactNode } from 'react';

import { handleModalAtom } from '@/stores/modal/actions';

const useModal = () => {
  const [modalState, setModalState] = useAtom(handleModalAtom);

  const openModal = (newContent: ReactNode) => {
    setModalState({
      isOpen: true,
      content: [...modalState.content, newContent],
    });
  };

  const closeModal = () => {
    if (!modalState.content.length) return;
    setModalState({ isOpen: false, content: [...modalState.content.slice(1)] });
  };

  const changeModal = (newContent: ReactNode) => {
    setModalState({
      isOpen: true,
      content: [...modalState.content.slice(1), newContent],
    });
  };

  return { openModal, changeModal, closeModal };
};

export default useModal;
