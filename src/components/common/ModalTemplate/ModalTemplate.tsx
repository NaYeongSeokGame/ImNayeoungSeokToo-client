import React from 'react';

import * as styles from './ModalTemplate.style';

interface ModalTemplateProps {
  /** 모달 내부에 들어갈 하위 컴포넌트 */
  children: React.ReactNode;
  /** 모달 중간에 들어갈 컴포넌트 */
  subSection?: React.ReactNode;
  /** 모달 하단에 들어갈 버튼 컴포넌트 */
  buttons?: React.ReactNode[];
}

const ModalTemplate = ({
  children,
  subSection,
  buttons,
}: ModalTemplateProps) => {
  return (
    <styles.Container>
      <styles.SectionWrapper>
        <styles.Section>
          <styles.Article>{children}</styles.Article>
        </styles.Section>
      </styles.SectionWrapper>
      {subSection && <>{subSection}</>}
      {buttons && <styles.ButtonSection>{buttons}</styles.ButtonSection>}
    </styles.Container>
  );
};

export default ModalTemplate;
