import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import CustomSections from '../UI/CustomSections';

const Home = () => {
    return (
        <Wrapper>
            <CustomSections id='home'>
                <Header />
            </CustomSections>
            <CustomSections id='home'>
                <Hero />
            </CustomSections>
            <CustomSections id='skills'>
                <Skills />
            </CustomSections>
        </Wrapper>
    );
};

export default Home;