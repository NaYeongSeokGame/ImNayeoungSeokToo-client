import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Navigator from '@/components/common/Navigator';

import * as styles from './BasicLayout.style';

const BasicLayout = ({ children }: PropsWithChildren) => {
  return (
    <styles.Wrapper>
      <styles.Background>
        <Navigator />
        {children || <Outlet />}
      </styles.Background>
    </styles.Wrapper>
  );
};

export default BasicLayout;
