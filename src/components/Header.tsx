import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

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

  @media (max-width: 320px) {
    max-width: 200px;
  }
`;

const NavLink = styled(ScrollLink)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ActiveBorder = styled.div<{ left: number; width: number }>`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.text};
  transition: left 0.3s ease-in-out, width 0.3s ease-in-out;
`;

const HeaderComponent = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [borderStyle, setBorderStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  useEffect(() => {
    if (activeLink) {
      const activeElement = document.querySelector(`.${activeLink}`);
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
        setBorderStyle({ left: offsetLeft, width: offsetWidth });
      }
    }
  }, [activeLink]);

  return (
    <Header>
      <Navbar>
        <NavLink
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          className="hero"
          onSetActive={() => setActiveLink('hero')}
        >
          Home
        </NavLink>
        <NavLink
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          className="skills"
          onSetActive={() => setActiveLink('skills')}
        >
          Skills
        </NavLink>
        <NavLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          className="about"
          onSetActive={() => setActiveLink('about')}
        >
          About
        </NavLink>
        <ActiveBorder left={borderStyle.left} width={borderStyle.width} />
      </Navbar>
    </Header>
  );
};

export default HeaderComponent;