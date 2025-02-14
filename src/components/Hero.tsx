import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
`;

const Titulo = styled.h1`
    font-size: 10rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.text};
`;

const Hero = () => {
    return (
        <HeroContainer>
        <Titulo>Ramon Garcia</Titulo>
        </HeroContainer>
    );
}


export default Hero;