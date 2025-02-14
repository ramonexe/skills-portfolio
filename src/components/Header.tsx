import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </Navbar>
    </Header>
  );
};

export default HeaderComponent;