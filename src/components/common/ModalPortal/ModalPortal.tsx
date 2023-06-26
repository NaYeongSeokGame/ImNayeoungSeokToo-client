import React from 'react';
import { createPortal } from 'react-dom';
import { useAtom } from 'jotai';

import useModal from '@/hooks/useModal';
import { modalStateAtom } from '@/stores/atoms';

import * as style from './ModalPortal.style';

const ModalPortal = () => {
  // modal의 Open 상태와 Content의 정보를 담은 atom 호출
  const [{ isOpen, content }] = useAtom(modalStateAtom);
  const { closeModal } = useModal();

  if (isOpen) {
    // 만약 mount 되기 전이라면, window 객체의 정보가 없으므로 false를 return 하게 됨.
    const modalRoot =
      window !== undefined ? document.getElementById('modal') : null;

    // 모달 외부의 여백만을 클릭했을 경우 강제로 창을 닫는 함수 closeModalByClick
    const closeModalByClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const eventTarget = e.target as HTMLElement;
      if (eventTarget.id === 'modal_overlay') {
        closeModal();
      }
    };

    // mount가 완료되었고, 모달의 상태 또한 열렸으며 보여줄 컨텐츠가 있다면 Portal 생성
    const [firstShowedModal] = content;
    return modalRoot && firstShowedModal
      ? createPortal(
          <style.Wrapper id="modal_overlay" onClick={closeModalByClick}>
            {firstShowedModal}
          </style.Wrapper>,
          modalRoot,
        )
      : null;
  }
  return null;
};

export default ModalPortal;
