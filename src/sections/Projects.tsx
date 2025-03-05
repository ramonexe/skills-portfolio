import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 1200px) {
        height: auto;
        padding-top: 20px;
    }
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;

const Projects = () => (
    <Section id="projects">
        <Titulo>Projects</Titulo>
        <ProjectsGrid>
            <ProjectCard
                image={project1}
                title="Wild Mutts Club"
                description="Plataforma SaaS gamificada para gestão de comunidades NFT, com pontuação e integração com Phantom Wallet. Participei do desenvolvimento completo do front-end."
                link="https://wildmuttsclub.com/"
            />
            <ProjectCard
                image={project2}
                title="Dynosorians"
                description="Landing page para projeto NFT, desenvolvida inteiramente por mim."
                link="https://dynosorians.com/"
            />
            <ProjectCard
                image={project3}
                title="Tekonami"
                description="Plataforma de Holder Verify para comunidades NFT. Atualmente participando do desenvolvimento do front-end."
                link="https://tekonami.com/"
            />
        </ProjectsGrid>
    </Section>
);

export default Projects;