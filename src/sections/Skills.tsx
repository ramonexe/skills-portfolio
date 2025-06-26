import styled, { keyframes } from 'styled-components';
import { FaJava, FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiStyledcomponents } from "react-icons/si";
import Sparkle from "../assets/sparkle.png";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: ${(props) => props.theme.colors.text};
`;

const Titulo = styled.h2`
    font-size: 3vh;
    padding-bottom: 20px;
    margin: 0;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 2vh;
    }
`;

const Description = styled.p`
    font-size: 1.5vh;
    font-weight: 300;
    font-family: 'Poppins', serif;
    margin: 0;
    margin-top: 20px;
    color: ${(props) => props.theme.colors.text};
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.3vh;
    }
`;

const FadeLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background: linear-gradient(to left, transparent 0%, ${(props) => props.theme.colors.background} 100%);
  z-index: 2;
  pointer-events: none;
`;

const FadeRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 100%;
  background: linear-gradient(to right, transparent 0%, ${(props) => props.theme.colors.background} 100%);
  z-index: 2;
  pointer-events: none;
`;


const SkillsList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
`;

const SkillsTrack = styled.div`
    display: flex;
    gap: 40px;
    animation: ${scrollAnimation} 7s linear infinite;
    white-space: nowrap;
    width: 60vw;
    z-index: 1;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.cardBackground || props.theme.colors.background};
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;
    min-width: 280px;
    width: 280px;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &:hover {
        box-shadow: 0 8px 25px ${(props) => props.theme.colors.primary}40;
        border-color: ${(props) => props.theme.colors.primary}60;
    }

    @media (max-width: 768px) {
        min-width: 220px;
        width: 220px;
        padding: 20px;
    }
`;

const SkillName = styled.h3`
    font-size: 2vh;
    font-weight: 400;
    font-family: 'Poppins', serif;
    margin: 0;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.text};

    svg {
        font-size: 3vh;
        color: ${(props) => props.theme.colors.primary};
        transition: color 0.3s ease;
        vertical-align: middle;
    }

    @media (max-width: 768px) {
        font-size: 1.5vh;
    }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.headerBackground};
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBarFiller = styled.div<{ value: number }>`
  height: 20px;
  width: ${(props) => props.value}%;
  background-color: ${(props) => props.color};
  transition: width 0.5s ease-in-out;
`;

const ProgressLabel = styled.span`
  text-align: right;
  font-size: 1.5vh;
  font-weight: 400;
  font-family: 'Poppins', serif;
  color: ${(props) => props.theme.colors.text};
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
    top: 85%;
    left: 10%;
  }
  
  &.sparkle-2 {
    bottom: 80%;
    right: 0%;
    width: 35px;
    height: 35px;
  }
`;

const Skills = () => {
    const skills = [
        { name: 'JavaScript', icon: <SiJavascript />, value: 40.35, color: '#F5DD1B' },
        { name: 'TypeScript', icon: <SiTypescript />, value: 62.53, color: '#2F74C0' },
        { name: 'Java', icon: <FaJava />, value: 45.40, color: '#E21E22' },
        { name: 'React', icon: <FaReact />, value: 79.02, color: '#00DCFF' },
        { name: 'Styled-Components', icon: <SiStyledcomponents />, value: 70.5, color: '#a129f1' },
        { name: 'HTML', icon: <FaHtml5 />, value: 82.00, color: '#e34c26' },
    ];

    const duplicatedSkills = [...skills, ...skills];

    return (
        <SkillsContainer>
            <SparkleElement className="sparkle-1" />
            <SparkleElement className="sparkle-2" />
            <Titulo>Habilidades</Titulo>
            <SkillsList>
                <FadeLeft />
                <FadeRight />
                <SkillsTrack>
                    {duplicatedSkills.map((skill, index) => (
                        <Skill key={`skill-${index}`}>
                            <SkillName>{skill.icon} {skill.name}</SkillName>
                            <ProgressBarContainer>
                                <ProgressBarFiller value={skill.value} color={skill.color} />
                            </ProgressBarContainer>
                            <ProgressLabel>{skill.value}%</ProgressLabel>
                        </Skill>
                    ))}
                </SkillsTrack>
            </SkillsList>
            <Description>
                <p>A porcentagem é baseada na minha experiência e na dificuldade/robustez de cada linguagem.</p>
                <p>Não necessariamente em quanto tempo eu a utilizo.</p>
            </Description>
        </SkillsContainer>
    );
};

export default Skills;