import { ModalCommonProps } from '@/components/common/modal/type';

import * as styles from './ModalMainContent.style';

const ModalMainContent = ({ children }: ModalCommonProps) => {
  return (
    <styles.SectionWrapper>
      <styles.Section>
        <styles.Article>{children}</styles.Article>
      </styles.Section>
    </styles.SectionWrapper>
  );
};

export default ModalMainContent;
