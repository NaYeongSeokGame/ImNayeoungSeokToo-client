import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import ModalPortal from '@/components/common/ModalPortal';
import Navigator from '@/components/common/Navigator';

import * as styles from './BasicLayout.style';

const BasicLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ModalPortal />
      <styles.Wrapper>
        <styles.Background>
          {children || <Outlet />}
          <Navigator />
        </styles.Background>
      </styles.Wrapper>
    </>
  );
};

export default BasicLayout;
