import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from './Header';

const CommonLayout = () => {
  return (
    <Container>
      <ContentContainer>
        <Header />
        <Outlet />
      </ContentContainer>
    </Container>
  );
};

export default CommonLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
`;

const ContentContainer = styled.div`
  width: 360px;
  height: 800px;
  background-image: url(/images/background.png);
`;
