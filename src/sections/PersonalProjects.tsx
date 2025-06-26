import React from 'react';
import styled from 'styled-components';
import { FaNpm } from "react-icons/fa";
import { Button } from 'dynamix-button';
import Sparkle from "../assets/sparkle.png";

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 0;
    background: ${props => props.theme.colors.headerBackground};
    border-radius: 12px;
    --s: 50px;
    --c1: #2622225a;
    --c2: #1b1b1b21;
    --g:conic-gradient(at 90% 40%,#0000 75%,var(--c1) 0);
    background: var(--g),var(--g) var(--s) var(--s) var(--c2);
    background-size: calc(2*var(--s)) calc(2*var(--s));

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 32px 0;
        margin: 0 16px;
    }
`;

const Content = styled.div`
    flex: 1;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        padding: 0 16px 24px 16px;
        align-items: center;
        text-align: center;
    }
`;

const Title = styled.h4`
    font-size: 2.2rem;
    margin-bottom: 16px;
    color: ${props => props.theme.colors.text};
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};
    margin-bottom: 32px;
    line-height: 1.6;
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const ProjectImage = styled.img`
    max-width: 400px;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(73, 23, 29, 0.712);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 32px rgba(117, 30, 41, 0.822);
    }
`;

const Titulo = styled.h2`
    font-size: 3vh;
    padding-bottom: 20px;
    margin: 0;
    white-space: nowrap;
    text-align: center;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 2vh;
    }
`;

const Subdescription = styled.p`
    font-size: 0.7rem;
    color: ${props => props.theme.colors.subdescription};
    margin-top: 16px;
    text-align: center;
    opacity: 0.8;
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
    top: 65%;
    left: 2.5%;
  }
  
  &.sparkle-2 {
    bottom: 78%;
    right: 7%;
    width: 55px;
    height: 55px;
  }

  @media (max-width: 768px) {
    &.sparkle-1 {
        top: 33%;
        left: 37%;
    }
    
    &.sparkle-2 {
        bottom: 52%;
        right: 15%;
        width: 35px;
        height: 35px;
    }
  }
`;

const handleLink = () => {
    window.open("https://www.npmjs.com/package/dynamix-button", "_blank");
};

const PersonalProjects: React.FC = () => (
    <>
        <SparkleElement className="sparkle-1" />
        <SparkleElement className="sparkle-2" />
        <Titulo>Projetos Pessoais</Titulo>
        <Section>
            <Content>
                <Title>Dynamix Button</Title>
                <Description>
                    Dynamix Button é uma biblioteca React para criar botões altamente customizáveis e dinâmicos, facilitando a implementação de interações modernas e acessíveis em seus projetos. Disponível no npm para uso imediato.
                </Description>
                <Button icon={<FaNpm />} alwaysShowText onClick={handleLink}>Ver no npm</Button>
                <Subdescription>Exemplo de uso do botão</Subdescription>
            </Content>
            <ImageWrapper>
                <a href="https://www.npmjs.com/package/dynamix-button" target="_blank" rel="noopener noreferrer">
                    <ProjectImage
                        src="https://media.licdn.com/dms/image/v2/D4D22AQHmabhJrVfurg/feedshare-shrink_1280/B4DZcBy8zfHEAk-/0/1748081823573?e=1753920000&v=beta&t=NTC2Wpy10scIHsme0BkawAX_61fyKZiaOCjWhbU5Tmk"
                        alt="Dynamix Button Demo"
                        onError={e => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=Dynamix+Button';
                        }}
                    />
                </a>
            </ImageWrapper>
        </Section>
    </>
);

export default PersonalProjects;