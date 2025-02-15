import styled from 'styled-components';

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: ${(props) => props.theme.colors.text};
`;

const Titulo = styled.h1`
    text-align: left;
    font-size: 4vh;
    font-weight: 400;
    font-family: 'Poppins', serif;
    margin: 0;
    padding-top: 25px;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 2vh;
    }
`;

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
    width: 100%;

    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    box-shadow: 0 0 8px 2px rgba(194, 220, 242, 0.2);
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
            <Titulo>All my skills</Titulo>
            <SkillsList>
                <Skill>
                    <SkillName>JavaScript</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={55} color='#F5DD1B'/>
                    </ProgressBarContainer>
                    <ProgressLabel>55%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>TypeScript</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={75} color='#2F74C0'/>
                    </ProgressBarContainer>
                    <ProgressLabel>75%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>Java</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={45} color='#E21E22'/>
                    </ProgressBarContainer>
                    <ProgressLabel>45%</ProgressLabel>
                </Skill>
                <Skill>
                    <SkillName>React</SkillName>
                    <ProgressBarContainer>
                        <ProgressBarFiller value={75} color='#00DCFF'/>
                    </ProgressBarContainer>
                    <ProgressLabel>75%</ProgressLabel>
                </Skill>
            </SkillsList>
        </SkillsContainer>
    );
};

export default Skills;