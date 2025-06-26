import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.headerBackground};
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media (max-width: 320px) {
    max-width: 200px;
  }
`;

const HeaderComponent = () => {

  return (
    <Header>
      <Navbar>
        <ThemeToggle />
      </Navbar>
    </Header>
  );
};

export default HeaderComponent;