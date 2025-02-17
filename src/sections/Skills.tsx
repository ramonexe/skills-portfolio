import styled from 'styled-components';

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: ${(props) => props.theme.colors.text};
`;

const Titulo = styled.h1`
    font-size: 3vh;
    font-weight: 400;
    padding-bottom: 20px;
    font-family: 'Poppins', serif;
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
        font-size: 1.5vh;
    }
`;

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    width: 100%;

    @media (max-width: 1200px) {
        align-items: center;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    box-shadow: 0 0 8px 2px rgba(194, 220, 242, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 15px rgba(194, 220, 242, 0.4);
    }

    @media (max-width: 1200px) {
        width: 400px;
    }

    @media (max-width: 768px) {
        width: 200px;
    }
    
    @media (max-width: 480px) {
        width: 150px;
    }

    @media (max-width: 375px) {
        width: 120px;
    }

    @media (max-width: 320px) {
        width: 80px;
    }
`;

const SkillName = styled.h3`
    font-size: 2vh;
    font-weight: 400;
    font-family: 'Poppins', serif;
    margin: 0;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 1.5vh;
    }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
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

const Skills = () => {
    return (
        <SkillsContainer>
            <Titulo>My most used languages</Titulo>
            <SkillsList>
                <Skill>
                    <SkillName>JavaScript</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={37} color='#F5DD1B'/>
                    </ProgressBarContainer>
                    <ProgressLabel>37%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>TypeScript</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={44} color='#2F74C0'/>
                    </ProgressBarContainer>
                    <ProgressLabel>44%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>Java</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={16} color='#E21E22'/>
                    </ProgressBarContainer>
                    <ProgressLabel>16%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>React</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={62} color='#00DCFF'/>
                    </ProgressBarContainer>
                    <ProgressLabel>62%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>CSS</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={59} color='#a129f1'/>
                    </ProgressBarContainer>
                    <ProgressLabel>59%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>HTML</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={67} color='#e34c26'/>
                    </ProgressBarContainer>
                    <ProgressLabel>67%</ProgressLabel>
                </Skill>
            </SkillsList>
            <Description>
                <p>The percentage is based on my experience and the difficulty/robustness of each language.</p>
                <p>Not necessarily how long I've been using it.</p>
            </Description>
        </SkillsContainer>
    );
};

export default Skills;