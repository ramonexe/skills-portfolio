import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import CustomSections from '../UI/CustomSections';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
        <Wrapper>
            <CustomSections id='home'>
                <Header />
            </CustomSections>
            <CustomSections id='hero'>
                <Fade>
                    <Hero />
                </Fade>
            </CustomSections>
            <CustomSections id='skills'>
                <Fade>
                    <Skills />
                </Fade>
            </CustomSections>
        </Wrapper>
    );
};

export default Home;