import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    text-align: center;
    font-size: 4vh;
    font-weight: 400;
    font-family: 'Poppins', serif;
    margin: 0;
    padding-top: 25px;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 2vh;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    text-align: center;
    outline: none;

    &:focus {
        border-color: #007BFF;
    }
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    width: 80%;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    box-shadow: 0 0 8px 2px rgba(194, 220, 242, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 15px rgba(194, 220, 242, 0.4);
    }

    @media (max-width: 768px) {
        width: 80%;
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

const ProgressBarFiller = styled.div<{ value: number; color: string }>`
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

interface LanguageData {
    [key: string]: number;
}

const languageColors: Record<string, string> = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    Java: '#E21E22',
    CSS: '#563D7C',
    HTML: '#E34F26',
    C: '#A8B9CC',
    'C++': '#00599C',
    PHP: '#4F5B93',
    Go: '#00ADD8',
    Ruby: '#CC342D',
    Swift: '#FFAC45',
    Kotlin: '#7F52FF',
    Dart: '#00B4AB',
    Rust: '#DEA584',
    Shell: '#89E051',
    Other: '#A0A0A0'
};

const fetchGitHubStats = async (username: string): Promise<LanguageData> => {
    try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
        const languages: Record<string, number> = {};

        await Promise.all(repos.data.map(async (repo: any) => {
            const { data } = await axios.get(repo.languages_url);
            Object.keys(data).forEach((lang) => {
                languages[lang] = (languages[lang] || 0) + data[lang];
            });
        }));

        const total = Object.values(languages).reduce((acc, value) => acc + value, 0);
        const percentages = Object.keys(languages).reduce((acc, key) => {
            acc[key] = parseFloat(((languages[key] / total) * 100).toFixed(2));
            return acc;
        }, {} as LanguageData);

        return percentages;
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        alert('Usuário não encontrado!');
        return {};
    }
};

const Skills = () => {
    const [languages, setLanguages] = useState<LanguageData>({});
    const [username, setUsername] = useState<string>('ramonexe');

    const handleSearch = async () => {
        if (!username.trim()) return;
        const data = await fetchGitHubStats(username);
        setLanguages(data);
    };

    useEffect(() => {
        handleSearch();
    }, [username]);

    return (
        <SkillsContainer>
            <Titulo>All my skills</Titulo>
            <SearchContainer>
                <SearchInput 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter GitHub username..." 
                />
                <SearchButton onClick={handleSearch}>Search</SearchButton>
            </SearchContainer>
            <SkillsList>
                {Object.entries(languages).map(([language, percentage]) => (
                    <Skill key={language}>
                        <SkillName>{language}</SkillName>
                        <ProgressBarContainer>
                            <ProgressBarFiller value={percentage} color={languageColors[language] || languageColors.Other} />
                        </ProgressBarContainer>
                        <ProgressLabel>{percentage}%</ProgressLabel>
                    </Skill>
                ))}
            </SkillsList>
        </SkillsContainer>
    );
};

export default Skills;
