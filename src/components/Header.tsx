import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <CommonHeader>
      <HomeButton>
        <Link to="/">
          <img src="/images/homeButton.png" alt="Home" />
        </Link>
      </HomeButton>
      <SoundButton />
    </CommonHeader>
  );
};

export default Header;

const CommonHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const HomeButton = styled.span`
  width: 30px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SoundButton = styled(HomeButton)`
  background-image: url(/images/soundButton.png);
`;
