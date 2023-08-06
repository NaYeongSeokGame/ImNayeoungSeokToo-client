import React, { Children, ReactNode, isValidElement } from 'react';

import ModalButton from '@/components/common/modal/ModalButton';

import * as styles from './ModalTemplate.style';

export interface ModalCommonProps {
  children?: React.ReactNode;
}

interface ModalTemplateProps {
  /** 모달 내부에 들어갈 하위 컴포넌트 */
  children: React.ReactNode;
}

const ModalTemplate = ({ children }: ModalTemplateProps) => {
  const modalMainContent = getModalMainContent(children);
  const modalSubContent = getModalSubContent(children);
  const modalButtons = getModalButtons(children);

  return (
    <styles.Container>
      {modalMainContent && <>{modalMainContent}</>}
      {modalSubContent && <>{modalSubContent}</>}
      {modalButtons && (
        <styles.ButtonSection>{modalButtons}</styles.ButtonSection>
      )}
    </styles.Container>
  );
};

const ModalMainContent = ({ children }: ModalCommonProps) => {
  return (
    <styles.SectionWrapper>
      <styles.Section>
        <styles.Article>{children}</styles.Article>
      </styles.Section>
    </styles.SectionWrapper>
  );
};

const ModalMainContentType = (<ModalMainContent />).type;

function getModalMainContent(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalMainContentType,
  );
}

const ModalSubTitle = ({ children }: ModalCommonProps) => {
  return <styles.SubContentTitle>{children}</styles.SubContentTitle>;
};

const ModalSubContent = ({ children }: ModalCommonProps) => {
  return <styles.SubContent>{children}</styles.SubContent>;
};

const ModalSubContentWrapper = ({ children }: ModalCommonProps) => {
  const childrenArray = Children.toArray(children);
  const ModalSubTitleType = (<ModalSubTitle />).type;
  const ModalSubContentType = (<ModalSubContent />).type;

  const modalSubTitle = childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalSubTitleType,
  );
  const modalSubContent = childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalSubContentType,
  );

  return (
    <>
      {modalSubTitle && <>{modalSubTitle}</>}
      {modalSubContent && <>{modalSubContent}</>}
    </>
  );
};

const ModalSubContentWrapperType = (<ModalSubContentWrapper />).type;

function getModalSubContent(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) =>
      isValidElement(child) && child.type === ModalSubContentWrapperType,
  );
}

const ModalButtonType = (<ModalButton />).type;

function getModalButtons(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalButtonType,
  );
}

const Modal = Object.assign(ModalTemplate, {
  MainContent: ModalMainContent,
  SubContentWrapper: ModalSubContentWrapper,
  SubContent: ModalSubContent,
  SubTitle: ModalSubTitle,
  Button: ModalButton,
});

export default Modal;
