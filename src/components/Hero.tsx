import { Button } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { GoDownload } from "react-icons/go";
import Typing from "react-typing-effect";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
`;

const Titulo = styled.h1`
    text-align: left;
    font-size: 7vh;
    font-weight: 400;
    font-family: 'Poppins', serif;
    margin: 0;
    padding-top: 25px;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 5vh;
    }
`;

const Buttons = styled.div`
    display: flex;
    white-space: nowrap;
    gap: 20px;
    margin-bottom: 15vh;
`;

const Subtitulo = styled.h2`
    font-size: 3vh;
    font-weight: 300;
    font-family: "Montserrat", serif;
    margin: 0;
    margin-bottom: 20px;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 2vh;
    }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 8px 2px rgba(194, 220, 242, 0.2);
  }
  50% {
    box-shadow: 0 0 40px 4px rgba(194, 220, 242, 1);
  }
  100% {
    box-shadow: 0 0 8px 2px rgba(194, 220, 242, 0.2);
  }
`;

const Foto = styled.div`
  background-image: url("https://avatars.githubusercontent.com/u/143695500?v=4");
  background-size: cover;
  background-position: center;
  height: 25vh;
  width: 25vh;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.text};
  box-shadow: 0 0 8px 2px rgba(194, 220, 242, 0.2);
  animation: ${pulse} 10s infinite;
  margin: 0;

  @media (max-width: 768px) {
    height: 20vh;
    width: 20vh;
  }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <Foto></Foto>
            <Titulo>Ramon Garcia</Titulo>
            <Subtitulo>
                <Typing text={["Beginner Developer", "Possible Fullstack", "But PRO on front-end", "Hire me please"]} speed={60} eraseDelay={1000} typingDelay={20} eraseSpeed={20} />
            </Subtitulo>
            <Buttons>
                <Button variant="contained" startIcon={<GoDownload />} href="/cv.pdf" download="Ramon_Garcia_CV.pdf" sx={{ backgroundColor: "#1f3661", color: "white", "&:hover": { backgroundColor: "#1c59c9", }, whiteSpace: "nowrap", }}>Download CV</Button>
                <Button variant="contained" target="_blank" rel="noopener noreferrer" href="https://wa.me/5511953432576"  sx={{ backgroundColor: "#181f2c", color: "#17aa54", "&:hover": { backgroundColor: "#17aa54", color: "white" }, }}>Contact-me</Button>
            </Buttons>
        </HeroContainer>
    );
}


export default Hero;