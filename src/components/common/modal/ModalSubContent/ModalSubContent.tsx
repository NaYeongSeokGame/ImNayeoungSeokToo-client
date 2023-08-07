import { Children, isValidElement } from 'react';

import { ModalCommonProps } from '@/components/common/modal/type';

import * as styles from './ModalSubContent.style';

export const ModalSubTitle = ({ children }: ModalCommonProps) => {
  return <styles.SubContentTitle>{children}</styles.SubContentTitle>;
};

export const ModalSubContent = ({ children }: ModalCommonProps) => {
  return <styles.SubContent>{children}</styles.SubContent>;
};

export const ModalSubContentWrapper = ({ children }: ModalCommonProps) => {
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
    <styles.SubContentWrapper>
      {modalSubTitle && <>{modalSubTitle}</>}
      {modalSubContent && <>{modalSubContent}</>}
    </styles.SubContentWrapper>
  );
};
