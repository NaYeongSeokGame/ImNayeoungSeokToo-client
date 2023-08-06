import React, { Children, ReactNode, isValidElement } from 'react';

import ModalButton from '@/components/common/modal/ModalButton';
import ModalMainContent from '@/components/common/modal/ModalMainContent/ModalMainContent';
import { ModalSubContentWrapper } from '@/components/common/modal/ModalSubContent/ModalSubContent';

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
      {modalButtons && <>{modalButtons}</>}
    </styles.Container>
  );
};

const ModalMainContentType = (<ModalMainContent />).type;

function getModalMainContent(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalMainContentType,
  );
}

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
  return (
    <styles.ButtonSection>
      {childrenArray.filter(
        (child) => isValidElement(child) && child.type === ModalButtonType,
      )}
    </styles.ButtonSection>
  );
}

export default ModalTemplate;
