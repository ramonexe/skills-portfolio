import { Button } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { GoDownload } from "react-icons/go";
import Image from "../assets/pfp.png";
import Sparkle from "../assets/sparkle.png";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  position: relative;
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SparkleElement = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url(${Sparkle});
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 1;
  
  &.sparkle-1 {
    top: 15%;
    left: 10%;
  }
  
  &.sparkle-2 {
    bottom: 0%;
    right: 0%;
    width: 35px;
    height: 35px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Titulo = styled.h1`
    text-align: center;
    font-size: 10vh;
    font-weight: 700;
    margin: 0;
    margin-top: -90px;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.text};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    position: relative;
    z-index: 4;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 6vh;
        margin-top: -50px;
        letter-spacing: 1px;
    }
`;

const Buttons = styled.div`
    display: flex;
    white-space: nowrap;
    gap: 25px;
    margin-top: 10px;
    animation: ${fadeAnimation} 1.2s ease-out 0.3s both;
    
    @media (max-width: 768px) {
        gap: 15px;
        flex-direction: column;
        align-items: center;
    }
`;

const Subtitulo = styled.h4`
    font-size: 4vh;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.text};
    text-align: center;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-size: 2.5vh;
        margin-bottom: 25px;
    }
`;

const Foto = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  height: 60vh;
  width: 60vh;
  border-radius: 50%;
  position: relative;
  margin: 0;
  filter: grayscale(0.5) brightness(0.9);
  border: 3px solid ${(props) => props.theme.colors.background};
  box-shadow: 
    0 0 30px 8px ${(props) => props.theme.colors.background}80,
    inset 0 0 50px 15px ${(props) => props.theme.colors.background}40;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle at center, transparent -10%, ${(props) => props.theme.colors.background} 100%);
    pointer-events: none;
    z-index: 2;
    transition: background 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle at center, transparent -10%, ${(props) => props.theme.colors.background} 100%);
    pointer-events: none;
    z-index: 1;
    transition: background 0.3s ease;
  }

  @media (max-width: 768px) {
    height: 45vh;
    width: 45vh;
    border-width: 2px;
    box-shadow: 
      0 0 20px 5px ${(props) => props.theme.colors.background}80,
      inset 0 0 35px 10px ${(props) => props.theme.colors.background}40;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <SparkleElement className="sparkle-1" />
      <SparkleElement className="sparkle-2" />
      
      <HeroContent>
        <Foto></Foto>
        <Titulo>RAMON GARCIA</Titulo>
        <Subtitulo>
          Desenvolvedor Front-end
        </Subtitulo>
        <Buttons>
          <Button 
            variant="contained" 
            startIcon={<GoDownload />} 
            href="/cv.pdf" 
            download="Ramon_Garcia_CV.pdf" 
            sx={{ 
              backgroundColor: "#181f2c30", 
              color: "#FFEED2", 
              "&:hover": { 
                backgroundColor: "#1c59c9",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(31, 54, 97, 0.3)"
              }, 
              whiteSpace: "nowrap", 
              transition: "all 0.3s ease",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px"
            }}
          >
            Baixar CV
          </Button>
          <Button 
            variant="contained" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://wa.me/5511953432576" 
            sx={{ 
              backgroundColor: "#181f2c30", 
              color: "#FFEED2", 
              "&:hover": { 
                backgroundColor: "#17aa54", 
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(23, 170, 84, 0.3)"
              }, 
              whiteSpace: "nowrap", 
              transition: "all 0.3s ease",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px"
            }}
          >
            Contate-me
          </Button>
        </Buttons>
      </HeroContent>
    </HeroContainer>
  );
}


export default Hero;