import Wrapper from '../components/Wrapper';
import Hero from '../components/Hero';
import Skills from '../sections/Skills';
import CustomSections from '../UI/CustomSections';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import FreelanceProjects from '../sections/FreelanceProjects';
import PersonalProjects from '../sections/PersonalProjects';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedSection = styled.div<{ inView: boolean }>`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(20px)')};
  animation: ${(props) => (props.inView ? fadeIn : 'none')} 0.6s ease-out;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: personalProjectsRef, inView: personalProjectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Wrapper>
      <CustomSections id='hero'>
        <AnimatedSection ref={heroRef} inView={heroInView}>
          <Hero />
        </AnimatedSection>
      </CustomSections>
      <CustomSections id='skills'>
        <AnimatedSection ref={skillsRef} inView={skillsInView}>
          <Skills />
        </AnimatedSection>
      </CustomSections>
      <CustomSections id='personalprojects'>
        <AnimatedSection ref={personalProjectsRef} inView={personalProjectsInView}>
          <PersonalProjects />
        </AnimatedSection>
      </CustomSections>
      <CustomSections id='projects'>
        <AnimatedSection ref={projectsRef} inView={projectsInView}>
          <FreelanceProjects />
        </AnimatedSection>
      </CustomSections>
    </Wrapper>
  );
};

export default Home;