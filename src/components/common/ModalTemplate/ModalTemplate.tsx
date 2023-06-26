import React from 'react';

import * as styles from './ModalTemplate.style';

interface ModalTemplateProps {
  /** 모달 헤더에 보여질 타이틀 */
  title?: string;
  /** 모달 내부에 들어갈 하위 컴포넌트 */
  children: React.ReactNode;
  /** 모달 하단에 들어갈 버튼 컴포넌트 */
  button?: React.ReactNode;
}

const ModalTemplate = ({ title, children, button }: ModalTemplateProps) => {
  return (
    <styles.Wrapper>
      {title && <styles.Header>{title}</styles.Header>}
      <styles.Section>{children}</styles.Section>
      {button && <styles.Button>{button}</styles.Button>}
    </styles.Wrapper>
  );
};

export default ModalTemplate;
