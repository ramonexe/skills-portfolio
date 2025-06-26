import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

    @media (max-width: 1200px) {
        width: 90%;
    }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h4`
  margin: 0 0 8px;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
  transition: color 0.3s ease;
`;

const CardDescription = styled.p`
  margin: 0 0 16px;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  transition: color 0.3s ease;
`;

const CardButton = styled.a`
  margin-top: auto;
  padding: 8px 16px;
  background-color: #3d3a2e2d;
  color: ${props => props.theme.colors.text};
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: scale(1.05);
  }
`;

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => (
  <Card>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton href={link} target="_blank" rel="noopener noreferrer">Visitar</CardButton>
    </CardContent>
  </Card>
);

export default ProjectCard;