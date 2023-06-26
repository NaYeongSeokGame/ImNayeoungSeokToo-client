import React from 'react';

import useModal from '@/hooks/useModal';
import ModalCloseIconSvg from '@/assets/icons/modalCloseIcon.svg';

import * as styles from './ModalTemplate.style';

interface ModalTemplateProps {
  /** 모달 헤더에 보여질 타이틀 */
  title: string;
  /** 모달 내부에 들어갈 하위 컴포넌트 */
  children: React.ReactNode;
}

const ModalTemplate = ({ title, children }: ModalTemplateProps) => {
  const { closeModal } = useModal();

  return (
    <styles.Wrapper>
      <styles.Header>
        <styles.Title>{title}</styles.Title>
        <styles.IconWrap>
          <ModalCloseIconSvg onClick={closeModal} />
        </styles.IconWrap>
      </styles.Header>
      <styles.Section>{children}</styles.Section>
    </styles.Wrapper>
  );
};

export default ModalTemplate;
