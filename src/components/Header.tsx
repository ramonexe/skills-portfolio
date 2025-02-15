import styled from 'styled-components';

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 1200px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Navbar>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#about">About</NavLink>
      </Navbar>
    </Header>
  );
};

export default HeaderComponent;